<h2>1. Global configuration (See {@link ICloudinaryConfigurations})</h2>

```javascript
// Import the cloudinary class
import {Cloudinary} from "@cloudinary/base/instance/Cloudinary";

// Create your instance
const cld = new Cloudinary({
    cloud: {
        cloudName: 'demo'
    },
    url: {
        secure: true // force https, set to false to force http
    }
});
```
