<!-- TOC depthFrom:1 depthTo:2 orderedList:false updateOnSave:true withLinks:true -->

- [Explorer: Criteria Form/Builder](#explorer-criteria-formbuilder)
- [Explorer: API Tester](#explorer-api-tester)
- [Explorer: Criteria Form - ACCESS TOKEN (optional)](#explorer-criteria-form---access-token-optional)
- [Layouts](#layouts)
- [Optimizations](#optimizations)
- [Shell (optional)](#shell-optional)
- [Ignore/Scratch/Thoughtspace](#ignorescratchthoughtspace)
  - [Explorer: Request Builder (like swagger)](#explorer-request-builder-like-swagger)

<!-- /TOC -->
**Your task is to create an interactive, browser-based tool for exploring endpoints on the Smartcar api. This tool will accept parameters describing an endpoint (values such as url, method, headers, body etc) and produce an html component for sending requests to that endpoint.**

(see http://petstore.swagger.io/ for an example of a working api-explorer)


# API Explorer: Request Form
1. Request Header
    - Endpoint -- TextInput
    - HTTP Method -- Select
    - Content-Type -- Select (disabled/defaultValue)

1. Request Body
    - Array of objects whos keys match HTML5 \<input\> attributes
    - Variable List: {name: "age", type: "number", value: "2"}
    - Form Row -- TextInput_name, Select_type, {Select_type}Input_value, etc. options
    - Autofill from PossibleOptions createdIn EndpointHistory (optional)


# API Explorer: Response Results
1. Render Result w/ Formatting
1. Attempt to Preview Results - like images, or data/content from StandardResponse (optional)


# API Explorer: Criteria Form - ACCESS TOKEN (optional)
1. Extra Criteria Form WYSIWYG with a "selector"
1. Selector identifies an access_token in the response
1. access_token is set to a variable which can be used in the endpoint Form


# Layouts
1. Desktop Only
1. Responsive (optional)


# Optimizations
1. requestParameters in url so the current settings can be easily shared
1. save requestParameters and responses to DB for app level cacheing


# Shell (optional)
1. Notifications



# Ignore/Scratch/Thoughtspace
## Explorer: Request Builder (like swagger)
1. Node List
1. Node Item Type (Get/Post/Etc)
1. Node Item Description
1. Node Item Schema
