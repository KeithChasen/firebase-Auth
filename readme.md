 
   -----------
   
### To use firebase cloud functions install firebase tools globally

  
``` 
npm install firebase-tools -g
``` 

### To initialize functions locally 

```
firebase init functions
``` 

### To deploy functions  

```
firebase deploy --only functions
``` 

##### firestore rules

```service cloud.firestore {
    match /databases/{database}/documents {
      // match logged in user doc in users collection
      match /users/{userId} {
      	allow create: if request.auth.uid != null;
        allow read: if request.auth.uid == userId;
      }
      
      match /posts/{postId} {
      	allow read: if request.auth.uid != null
        allow write: if request.auth.token.admin == true
      }
    }
  }
  ```
