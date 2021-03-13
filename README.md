# Taproom Frontend Developer Test Project Specific Info 
(Also in Taproom Test Readme)

## Commands

* `npm run start`        - Starts Gulp watcher on `scripts` and `styles` directories.
* `npm run build`        - Gulp builds the .min files from `scripts` and `styles`, but doesn't watch.
* `npm run watch`        - Runs theme deploy and theme watch on development config.
* `npm run test`         - Runs Cypress open and will start any tests.
* `npm run deploy-dev`   - Runs `theme deploy --env=development`
* `npm run deploy-stage` - Runs `theme deploy --env=staging`

## Themkit Setup

To build this project:

1. Clone repo locally

2. Install Shopify tooling:
   **Using Homebrew**

   - `brew tap shopify/shopify`
   - `brew install themekit`

3. Install [Themekit](https://shopify.github.io/themekit/)

4. Run `npm install`

5. Set up config.yml
  - Note: `settings_data` and `settings_schema` are ignored in snippet below. If you
    are adding to them from code, uncomment by replacing `-` with `#`.

``` yaml
# Password, theme_id, and store variables are required.
#
# For more information on this config file:
# https://shopify.github.io/themekit/commands/#configure

development:
  password: [your-api-password]
  theme_id: "[your-theme-id]"
  store: [your-store].myshopify.com
  ignores:
    -themekit.ignores
  ignore_files:
      - config/settings_data.json
      - config/settings_schema.json  
  
staging: 
  password: [your-api-password]
  theme_id: "[your-theme-id]"
  store: [your-store].myshopify.com
  ignores:
    -themekit.ignores
  ignore_files:
      - config/settings_data.json
      - config/settings_schema.json  
  
production: 
  password: [your-api-password]
  theme_id: "[your-theme-id]"
  store: [your-store].myshopify.com
  timeout: 100s
  readonly: true
```

6. Setup Private app to link local dev environment to Shopify  

- **Setup Private App**
  - Shopify admin => Apps => Private Apps => Manage Private Apps => Create New
    Private App
    - Enter App Name (Taproom Development) & Contact Email (kelly@thetaproom.com)
    - _Theme templates and theme assets_ set to **Read Write** access.
    - Save
    - Copy **Password**

    Gif for walkthrough:
    ![Custom App Walkthrough](../setup-docs/shopify-local-theme-development-generate-api.gif)

7. Add password to `config.yml` file
8. Go to Shopify Admin -> Online Store -> Themes -> Actions -> Edit Code
9. Grab Theme Id from URL
10. Add Theme Id to `theme_id` field in `config.yml` (should be a number)

  Gif of walkthrough:  
  ![Get Theme Id](../setup-docs/shopify-local-theme-development-get-theme-id.gif)

11. Run `theme deploy`
12. Shopify Admin -> Online Store -> Themes Actions -> Preview

## Test Tasks
  For this part of the interview process, we're looking at your HTML, CSS, and
  JavaScript - is it semantic, is it clean, is it mobile-friendly, are you
  using best practices when writing your code. We also want to see your commit
  history; we're looking for clarity on how you communicate the changes you're
  making as requested.

**Edit the Debut theme (default published theme) to make the following changes:**

1. Add a "Buy Now" button to the product loop in the Featured Collection
   section. 
  The button should appear when you hover over the product's image. (During your pair programming session, you'll link that Buy Now button to add that item to the cart via Ajax.)

2. Create a new FAQs section. 
   The section should have a title and blocks for question and answer. When you
   click on a question, the answer's visibility should toggle. We're not testing
   you on your liquid; we want to see how you write the JavaScript to make the
   questions toggle to show the answer, and we want to see how you style it for
   desktop and mobile. 

**You'll have one week to complete this; the sooner you can get the test back to us, the sooner we can schedule your next interview.**