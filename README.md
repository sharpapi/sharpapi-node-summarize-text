![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Text Summarizer API for Node.js

## 📄 Generate concise summaries of long text — powered by SharpAPI AI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-summarize-text.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-summarize-text)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-summarize-text.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI Text Summarizer** condenses long articles, documents, and content into concise summaries. Perfect for content curation, creating executive summaries, and improving content digestibility.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [Use Cases](#use-cases)
7. [API Endpoint](#api-endpoint)
8. [Related Packages](#related-packages)
9. [License](#license)

---

## Requirements

- Node.js >= 16.x
- npm or yarn

---

## Installation

### Step 1. Install the package via npm:

```bash
npm install @sharpapi/sharpapi-node-summarize-text
```

### Step 2. Get your API key

Visit [SharpAPI.com](https://sharpapi.com/) to get your API key.

---

## Usage

```javascript
const { SharpApiSummarizeTextService } = require('@sharpapi/sharpapi-node-summarize-text');

const apiKey = process.env.SHARP_API_KEY; // Store your API key in environment variables
const service = new SharpApiSummarizeTextService(apiKey);

const text = 'Long article text that needs to be summarized...';

async function processText() {
  try {
    // Submit processing job
    const statusUrl = await service.summarize(text);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Result:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

processText();
```

---

## API Documentation

### Methods

The service provides methods for processing content asynchronously. All methods return a status URL for polling results.

**Parameters:**
- `content` (string, required): The content to process
- `language` (string, optional): Output language
- `voice_tone` (string, optional): Desired tone (e.g., professional, casual)
- `context` (string, optional): Additional context for better results

For complete API specifications, see the [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsVm).

### Response Format

The API returns structured JSON data. Response format varies by endpoint - see documentation for details.

---

## Examples

### Basic Example

```javascript
const { SharpApiSummarizeTextService } = require('@sharpapi/sharpapi-node-summarize-text');

const service = new SharpApiSummarizeTextService(process.env.SHARP_API_KEY);

// Customize polling behavior if needed
service.setApiJobStatusPollingInterval(10);  // Poll every 10 seconds
service.setApiJobStatusPollingWait(180);     // Wait up to 3 minutes

// Use the service
// ... (implementation depends on specific service)
```

For more examples, visit the [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/summarize-text).

---

## Use Cases

- **Content Curation**: Create brief overviews of long articles
- **Executive Summaries**: Generate business document summaries
- **News Aggregation**: Summarize news articles for quick reading
- **Research**: Condense research papers and reports
- **Email Digests**: Create brief summaries for newsletters
- **Product Descriptions**: Generate short descriptions from detailed content

---

## API Endpoint

**POST** `/content/summarize`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsVm)
- [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/summarize-text)

---

## Related Packages

- [@sharpapi/sharpapi-node-translate](https://www.npmjs.com/package/@sharpapi/sharpapi-node-translate)
- [@sharpapi/sharpapi-node-paraphrase](https://www.npmjs.com/package/@sharpapi/sharpapi-node-paraphrase)
- [@sharpapi/sharpapi-node-generate-keywords](https://www.npmjs.com/package/@sharpapi/sharpapi-node-generate-keywords)

---

## License

This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

---

## Support

- **Documentation**: [SharpAPI.com Documentation](https://sharpapi.com/documentation)
- **Issues**: [GitHub Issues](https://github.com/sharpapi/sharpapi-node-client/issues)
- **Email**: contact@sharpapi.com

---

**Powered by [SharpAPI](https://sharpapi.com/) - AI-Powered API Workflow Automation**
