# INSTANT-VISIO

#### 1. RUN APP in ANDROID

- **1 ère étape :**: ouvrir l'application dans éditeur de code sur mac/window/linux exemple : Visual studio(telecharger sur internet) , installer node et npm en fin installer react-native.
- **2 ème étape :**: npm install
- **3 ème étape :**: react-native link
- **4 ème étape :**: npx jetify
- **5 ème étape :**: cd android
- **6 ème étape :**: chmod +x gradlew && ./gradlew compileDebug --stacktrace
- **7 ème étape :**: (script in package.json) npm run android-test


#### 2. RUN APP in IOS
- **2 ème étape :**: npm install
- **3 ème étape :**: react-native link
- **4 ème étape :**: npx jetify
- **5 ème étape :**: cd ios
- **6 ème étape :**: pod install
- **7 ème étape :**: ouvrir le projet avec X-CODE puis ajouter dans le dossier ressources googloe_service.split
- **8 ème étape :**: à partir de x-code lancer l'application.
