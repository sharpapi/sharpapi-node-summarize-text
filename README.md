![SharpAPI GitHub cover](https://sharpapi.com/sharpapi-github-php-bg.jpg "SharpAPI Node.js Client")

# Text Summarization API for Node.js

## 📝 Summarize long text into concise summaries — powered by SharpAPI AI.

[![npm version](https://img.shields.io/npm/v/@sharpapi/sharpapi-node-summarize-text.svg)](https://www.npmjs.com/package/@sharpapi/sharpapi-node-summarize-text)
[![License](https://img.shields.io/npm/l/@sharpapi/sharpapi-node-summarize-text.svg)](https://github.com/sharpapi/sharpapi-node-client/blob/master/LICENSE.md)

**SharpAPI Text Summarization** uses advanced AI to create concise, accurate summaries of long-form content. Perfect for articles, documents, reports, and more.

---

## 📋 Table of Contents

1. [Requirements](#requirements)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Documentation](#api-documentation)
5. [Examples](#examples)
6. [License](#license)

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

const longText = `
Artificial intelligence (AI) has revolutionized numerous industries in recent years.
From healthcare to finance, AI-powered systems are helping organizations make better
decisions, automate complex processes, and improve customer experiences. Machine
learning algorithms can now analyze vast amounts of data in seconds, identifying
patterns that would take humans years to discover. As AI technology continues to
advance, we can expect even more transformative applications across all sectors
of the economy.
`;

async function summarizeContent() {
  try {
    // Submit summarization job
    const statusUrl = await service.summarizeText(longText, 'English', 50);
    console.log('Job submitted. Status URL:', statusUrl);

    // Fetch results (polls automatically until complete)
    const result = await service.fetchResults(statusUrl);
    console.log('Summary:', result.getResultJson());
  } catch (error) {
    console.error('Error:', error.message);
  }
}

summarizeContent();
```

---

## API Documentation

### Methods

#### `summarizeText(text: string, language?: string, maxLength?: number, context?: string): Promise<string>`

Summarizes the provided text into a concise version.

**Parameters:**
- `text` (string, required): The text content to summarize
- `language` (string, optional): The language of the text (default: 'English')
- `maxLength` (number, optional): Maximum length of summary in words (default: 100)
- `context` (string, optional): Additional context to guide summarization

**Returns:**
- Promise<string>: Status URL for polling the job result

**Example:**
```javascript
const statusUrl = await service.summarizeText(
  longArticle,
  'English',
  75,
  'Focus on key technological advances'
);
const result = await service.fetchResults(statusUrl);
```

### Response Format

The API returns the summarized text:

```json
{
  "summary": "AI has revolutionized industries by enabling data analysis and automation...",
  "original_length": 423,
  "summary_length": 50,
  "compression_ratio": 0.12
}
```

---

## Examples

### Basic Text Summarization

```javascript
const { SharpApiSummarizeTextService } = require('@sharpapi/sharpapi-node-summarize-text');

const service = new SharpApiSummarizeTextService(process.env.SHARP_API_KEY);

const article = `
[Your long article content here...]
`;

service.summarizeText(article, 'English', 100)
  .then(statusUrl => service.fetchResults(statusUrl))
  .then(result => {
    const summary = result.getResultJson();
    console.log('Original length:', summary.original_length, 'words');
    console.log('Summary length:', summary.summary_length, 'words');
    console.log('Summary:', summary.summary);
  })
  .catch(error => console.error('Summarization failed:', error));
```

### Multi-Document Summarization

```javascript
const service = new SharpApiSummarizeTextService(process.env.SHARP_API_KEY);

const documents = [
  { title: 'AI Report 2024', content: '...' },
  { title: 'Market Analysis', content: '...' },
  { title: 'Tech Trends', content: '...' }
];

const summaries = await Promise.all(
  documents.map(async (doc) => {
    const statusUrl = await service.summarizeText(doc.content, 'English', 50);
    const result = await service.fetchResults(statusUrl);
    return {
      title: doc.title,
      summary: result.getResultJson().summary
    };
  })
);

console.log('Document summaries:', summaries);
```

### Context-Aware Summarization

```javascript
const service = new SharpApiSummarizeTextService(process.env.SHARP_API_KEY);

const technicalDoc = `[Long technical documentation...]`;

const statusUrl = await service.summarizeText(
  technicalDoc,
  'English',
  100,
  'Focus on API endpoints and authentication methods'
);

const result = await service.fetchResults(statusUrl);
console.log('Technical summary:', result.getResultJson().summary);
```

---

## Use Cases

- **Content Curation**: Create summaries for news aggregation platforms
- **Research**: Quickly understand academic papers and research documents
- **Business Intelligence**: Summarize reports and market analyses
- **Email Management**: Generate summaries of long email threads
- **Documentation**: Create executive summaries of technical documents
- **Social Media**: Generate post previews from long-form content
- **E-learning**: Provide study summaries of educational materials

---

## API Endpoint

**POST** `/content/summarize`

For detailed API specifications, refer to:
- [Postman Documentation](https://documenter.getpostman.com/view/31106842/2sBXVeGsVa)
- [Product Page](https://sharpapi.com/en/catalog/ai/content-marketing-automation/summarize-text)

---

## Related Packages

- [@sharpapi/sharpapi-node-translate](https://www.npmjs.com/package/@sharpapi/sharpapi-node-translate) - Text translation
- [@sharpapi/sharpapi-node-paraphrase](https://www.npmjs.com/package/@sharpapi/sharpapi-node-paraphrase) - Text paraphrasing
- [@sharpapi/sharpapi-node-generate-keywords](https://www.npmjs.com/package/@sharpapi/sharpapi-node-generate-keywords) - Keyword extraction
- [@sharpapi/sharpapi-node-client](https://www.npmjs.com/package/@sharpapi/sharpapi-node-client) - Full SharpAPI SDK

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
