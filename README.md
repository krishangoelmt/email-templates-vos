# email-templates-vos
Email templates for voice-over slideshow collaboration.

Email templates for different flows.
- [Admin workflow](https://invis.io/DSTOJJRB69Z)
- [SME workflow](https://invis.io/UGTBUF68FK4)

## Live template preview
Preview templates in your browser. A live preview is hosted at [projectpage](https://www.google.com).


## Development
If you want to make changes to this project, start by cloning this repo on your local. [(how?)](https://www.atlassian.com/git/tutorials/setting-up-a-repository/git-clone).
<br>Do<br>
```sh
npm i
npm start
```

Then open http://localhost:8080/ to launch the app.


### Project structure
The project contains HTML email templates. The template files are inside `templates` folder:

```
email-templates-vos
├── templates
    └── Admin
    └── SME
    └── Archieve
```

Templates are inside respective folders. Each folder contains two files for a template.

- A _dev-friendly_ version of the template can be found in an HTML file with the name same as the parent folder. This version is properly indented in human readable format and contains styles  injected in `<style>` tag inside `<head>`. these files are easier to understand and make changes on.
- _minified_ version with *inline* styles. Classes are removed and the file is minified in a single line. Use this version to share with other projects (e.g. mt-mailer-ops).



