import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.join(__dirname, '..', 'data');
const PROFILE_FILE = path.join(DATA_DIR, 'profiles.json');

function ensureStorage() {
    if (!fs.existsSync(DATA_DIR)) {
        fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    if (!fs.existsSync(PROFILE_FILE)) {
        fs.writeFileSync(PROFILE_FILE, JSON.stringify({}, null, 2));
    }
}

export function loadProfiles() {
    ensureStorage();
    const raw = fs.readFileSync(PROFILE_FILE, 'utf-8');
    return JSON.parse(raw || '{}');
}

export function saveProfiles(profiles) {
    ensureStorage();
    fs.writeFileSync(PROFILE_FILE, JSON.stringify(profiles, null, 2));
}