# 📄 Online Resume

A modern, responsive **online resume** built using **HTML**, **CSS**, and **JavaScript**, with dynamically rendered resume content stored inside a single structured object in `script.js`.  
The project is deployed using **AWS S3** and automatically updated through **AWS CodePipeline**.
[Live Demo](http://my-resume.madebysachin.com.s3-website.ca-central-1.amazonaws.com)

---

## 🚀 Features

### ✅ Dynamic Resume Rendering
- Resume content is stored in a dedicated **`resumeData.js`** file.
- `script.js` imports this file and uses it to dynamically render all resume sections.
- Improves project organization and makes updates easier.

### 🎯 Dynamic Rendering
- Personal Info, Experience, Projects, Skills, and Education are dynamically generated with JavaScript.
- Update your resume by editing **only one file—`resumeData.js`**.
- No changes required in the HTML layout when updating content.

### 🎨 Fully Responsive & Lightweight
- Pure **HTML + CSS** (no frameworks required).
- Clean layout optimized for both desktop and mobile.
- Loads instantly due to zero external dependencies.

### ☁️ AWS Deployment & CI/CD
- Hosted on **Amazon S3** as a static site.
- Updated automatically through **AWS CodePipeline**:
  - GitHub → CodePipeline → S3
- Optional CloudFront distribution for global performance and caching.

---

## 🧠 Resume Data (`script.js`)

All resume content is stored in one object:

```js
const resumeData = {
    personalInfo: { ... },
    employment: [ ... ],
    projects: [ ... ],
    education: [ ... ],
    skills: { ... }
};
