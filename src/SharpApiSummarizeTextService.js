const { SharpApiCoreService, SharpApiJobTypeEnum } = require('@sharpapi/sharpapi-node-core');

/**
 * Service for summarizing text using SharpAPI.com
 */
class SharpApiSummarizeTextService extends SharpApiCoreService {
  /**
   * Creates a new SharpApiSummarizeTextService instance
   * @param {string} apiKey - Your SharpAPI API key
   * @param {string} [apiBaseUrl='https://sharpapi.com/api/v1'] - API base URL
   */
  constructor(apiKey, apiBaseUrl = 'https://sharpapi.com/api/v1') {
    super(apiKey, apiBaseUrl, '@sharpapi/sharpapi-node-summarize-text/1.0.1');
  }

  /**
   * Generates a summarized version of the provided content.
   * Perfect for generating marketing introductions of longer texts.
   *
   * @param {string} text
   * @param {string|null} language
   * @param {number|null} maxLength
   * @param {string|null} voiceTone
   * @param {string|null} context
   * @returns {Promise<string>} - The status URL.
   */
  async summarizeText(text, language = null, maxLength = null, voiceTone = null, context = null) {
    const data = { content: text };
    if (language) data.language = language;
    if (maxLength) data.max_length = maxLength;
    if (voiceTone) data.voice_tone = voiceTone;
    if (context) data.context = context;

    const response = await this.makeRequest('POST', SharpApiJobTypeEnum.CONTENT_SUMMARIZE.url, data);
    return this.parseStatusUrl(response);
  }
}

module.exports = { SharpApiSummarizeTextService };