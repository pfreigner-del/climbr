# ClimbЯ — personal Android app

Native Android app (Capacitor) built from the ClimbR web app. Everything runs offline on the phone.

## Get the app
Every push to `main` builds a signed APK automatically (GitHub Actions → "Build ClimbR APK").
Download it from **Releases** on your phone, open it, allow "install from this source" once.

## Update the app
Edit files in `web/` and push. A new release appears within a few minutes; installing it keeps your data.

## Structure
- `web/`: the app (HTML/CSS/JS, icons). This is what you edit.
- `android/`: native Android project (icon, name, permissions, signing).
- Signing key: stored only as GitHub secrets `KEYSTORE_BASE64` + `KEYSTORE_PASSWORD` (backup copy in your ClimbR\App\signing-key folder). Never commit it.
- `.github/workflows/build-apk.yml`: the automatic build.
