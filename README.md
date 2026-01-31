# SafePass Extension Starter

## About This Project

This project was created as a study project to explore and learn **Hotwire** (Stimulus + Turbo) and **Google Chrome Extension development**. It demonstrates how to build a modern browser extension using reactive JavaScript patterns with Hotwire while integrating with Chrome's extension APIs.

## What is SafePass?

SafePass is a Chrome extension that demonstrates password management functionality, showcasing how to build interactive browser extensions with modern web technologies.

## Technologies Used

- **[Hotwire Stimulus](https://stimulus.hotwired.dev/)** - Modest JavaScript framework for adding behavior to HTML
- **[Hotwire Turbo](https://turbo.hotwired.dev/)** - Framework for creating fast, modern web applications without complex JavaScript
- **[Chrome Extensions Manifest V3](https://developer.chrome.com/docs/extensions/mv3/)** - Latest Chrome extension platform
- **[Bootstrap 5](https://getbootstrap.com/)** - CSS framework for styling
- **[Bootstrap Icons](https://icons.getbootstrap.com/)** - Icon library
- **[esbuild](https://esbuild.github.io/)** - Fast JavaScript bundler

## Project Structure

```
SafePassExtensionStarter/
├── src/
│   ├── js/
│   │   ├── application.js           # Stimulus application setup
│   │   ├── contentScript.js         # Chrome extension content script
│   │   ├── controllers/             # Stimulus controllers
│   │   │   ├── app_controller.js
│   │   │   ├── auth_controller.js
│   │   │   ├── entries_controller.js
│   │   │   ├── search_controller.js
│   │   │   └── toggle_password_controller.js
│   │   ├── services/                # Business logic services
│   │   │   ├── fetch_entries_service.js
│   │   │   └── storage_service.js
│   │   ├── templates/               # HTML templates
│   │   │   └── entries_templates.js
│   │   └── utils/                   # Utility functions
│   │       ├── icons.js
│   │       └── inputs.js
│   └── css/                         # Stylesheets
│       ├── components/
│       ├── core.css
│       └── variables.css
├── dist/                            # Built extension files
│   ├── manifest.json
│   ├── popup/
│   └── frames/
├── build.js                         # Build script using esbuild
└── package.json
```

## Key Learning Points

### Hotwire Stimulus
- Controller-based architecture for organizing JavaScript
- Data attributes for connecting HTML to JavaScript behavior
- Targets, actions, and values API
- Lifecycle callbacks

### Chrome Extensions
- Manifest V3 structure and configuration
- Content scripts injection
- Extension popup development
- Chrome Storage API
- Permissions and security model

### Integration
- How to use modern JavaScript frameworks within Chrome extensions
- Bundling considerations for extension development
- Organizing code in an extension context

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Google Chrome browser

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd SafePassExtensionStarter
```

2. Install dependencies:
```bash
npm install
```

3. Build the extension:
```bash
npm start
```

### Loading the Extension in Chrome

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode" in the top right
3. Click "Load unpacked"
4. Select the `dist` folder from this project
5. The SafePass extension should now appear in your extensions list

## Development

### Building

The project uses esbuild for fast bundling. Run the build script to compile the source files:

```bash
npm start
```

This will bundle all JavaScript and CSS files into the `dist` directory.

### Project Architecture

The project follows the **Stimulus** controller pattern:

- **Controllers**: Located in `src/js/controllers/`, each controller manages a specific piece of functionality
- **Services**: Business logic separated from UI concerns
- **Templates**: HTML generation functions for dynamic content
- **Utils**: Helper functions and utilities

### Chrome Extension Components

- **Manifest**: `dist/manifest.json` - Extension configuration
- **Content Script**: Injected into web pages to add functionality
- **Popup**: Extension popup interface accessible from the toolbar
- **Frames**: Embedded HTML frames for different views

## Learning Resources

### Hotwire
- [Stimulus Handbook](https://stimulus.hotwired.dev/handbook/introduction)
- [Turbo Handbook](https://turbo.hotwired.dev/handbook/introduction)
- [Hotwire Official Site](https://hotwired.dev/)

### Chrome Extensions
- [Chrome Extension Documentation](https://developer.chrome.com/docs/extensions/)
- [Manifest V3 Migration Guide](https://developer.chrome.com/docs/extensions/mv3/intro/)
- [Chrome Extension Samples](https://github.com/GoogleChrome/chrome-extensions-samples)

## License

MIT

## Notes

This is a learning project and is intended for educational purposes. It demonstrates patterns and practices for building Chrome extensions with modern JavaScript frameworks.
