import { readFileSync, writeFileSync } from "fs";

let targetVersion;

try {
    targetVersion = process.argv.find(value => value.startsWith('--new_version')).split('=')[1];
} catch (e) {
    throw Error('No new version recevied!');
}


// read minAppVersion from manifest.json
let manifestFile = JSON.parse(readFileSync("manifest.json", "utf8"));
const { minAppVersion } = manifestFile;
// update version to target version
manifestFile.version = targetVersion;
writeFileSync("manifest.json", JSON.stringify(manifestFile, null, "\t"));

// update version in package
let packageFile = JSON.parse(readFileSync("package.json", "utf8"));
packageFile.version = targetVersion;
writeFileSync("package.json", JSON.stringify(packageFile, null, "\t"));

// read versions file 
let versionsFile = JSON.parse(readFileSync("versions.json", "utf8"));
let keys = Object.keys(versionsFile);

// remove existing versions with minAppVersion
keys.forEach(key => {
    if (minAppVersion === versionsFile[key]) {
        delete versionsFile[key];
    }
});

// update versions.json with target version and minAppVersion from manifest.json
versionsFile[targetVersion] = minAppVersion;
writeFileSync("versions.json", JSON.stringify(versionsFile, null, "\t"));
