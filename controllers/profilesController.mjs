import {loadProfiles, saveProfiles } from "../utils/fileUtils.mjs";

export function createProfile(req, res) {
    const { userId, name, email, bio, avatarUrl } = req.body;

    if (!userId || !email) {
        return res.status(400).json({ error: "userId and email are required" });
    }

    const profiles = loadProfiles();

if (profiles[userId]) {
    return res.status(409).json({ error: "Profile  already exists" });
}

const profile = { 
    userId, 
    name: name || "", 
    email, 
    bio: bio || "", 
    avatarUrl: avatarUrl || ""
};

profiles[userId] = profile;
saveProfiles(profiles);

res.status(201).json({ message: "Profile created", profile });
}

export function getProfile(req, res) {
    const { userId } = req.params;
    const profiles = loadProfiles();

    if (!profiles[userId]) {
        return res.status(404).json({ message: "Profile not found" });
    }

    res.json(profiles[userId]);
}

export function updateProfile(req, res) {
    const { userId } = req.params;
    const updates = req.body;
    const profiles = loadProfiles();
    const existing = profiles[userId];

    if (!existing) {
        return res.status(404).json({ message: "Profile not found" });
    }

    const updated = {
        ...existing,
        ...updates,
        userId: existing.userId
    };

    profiles[userId] = updated;
    saveProfiles(profiles);

    res.json({ message: "Profile updated", profile: updated });
}

export function deleteProfile(req, res) {
    const { userId } = req.params;
    const profiles = loadProfiles();

    if (!profiles[userId]) {
        return res.status(404).json({ message: "Profile not found" });
    }

    delete profiles[userId];
    saveProfiles(profiles);

    res.json({ message: "Profile deleted" });
}
