# Fireworks

[Fireworks](https://app.fireworks.ai/) is a cloud platform that offers efficient model inference and deployment services, providing cost-effective access to a variety of AI models through their API service, including [Llama 2](https://fireworks.ai/models/fireworks/llama-v2-70b-chat), [DeepSeek](https://fireworks.ai/models/fireworks/deepseek-v3), and other open-source models.

## Chat model

We recommend using Fireworks's HTTP server for chat functionality. It provides an OpenAI-compatible chat API interface.

```toml title="~/.tabby/config.toml"
[model.chat.http]
kind = "openai/chat"
model_name = "accounts/fireworks/models/deepseek-v3"
api_endpoint = "https://api.fireworks.ai/inference/v1"
api_key = "your-api-key"
```

## Completion model

Fireworks does not offer completion models (FIM) through their API.

## Embeddings model

Fireworks currently does not offer embeddings models through their API.