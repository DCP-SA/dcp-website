---
name: DeepSeek-V4.1-Flash-1017
publish_date: 2026-10-17
parameters: 763205315794
v_ram: 1024
context_window: 1048576
publisher: deepseek-ai
icon: /media/pasted-image-1793806760226.png
meta_data:
  code: |-
    {
      "_id": "6ad2e0265a59c8bc18707765",
      "id": "deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "private": false,
      "pipeline_tag": "image-text-to-text",
      "library_name": "transformers",
      "tags": [
        "transformers",
        "safetensors",
        "deepseek_v41",
        "text-generation",
        "image-text-to-text",
        "license:mit",
        "eval-results",
        "endpoints_compatible",
        "8-bit",
        "fp8",
        "deploy:azure",
        "region:us"
      ],
      "downloads": 221621,
      "likes": 5237,
      "modelId": "deepseek-ai/DeepSeek-V4.1-Flash-1017",
      "author": "deepseek-ai",
      "sha": "1bae0e1088993b9b82de08f59de5be5a34e42170",
      "lastModified": "2026-10-17T05:46:55.000Z",
      "gated": false,
      "disabled": false,
      "cardData": {
        "license": "mit",
        "library_name": "transformers",
        "pipeline_tag": "image-text-to-text"
      },
      "transformersInfo": {
        "auto_model": "AutoModelForCausalLM",
        "pipeline_tag": "text-generation"
      },
      "createdAt": "2026-10-17T02:40:38.000Z",
      "safetensors": {
        "parameters": {
          "BF16": 1976441856,
          "F32": 42307282,
          "F8_E4M3": 204015223296,
          "I8": 557171343360
        },
        "total": 763205315794
      },
      "inference": "warm",
      "usedStorage": 510750942072
    }
  lang: plain
hf_url: https://huggingface.co/deepseek-ai/DeepSeek-V4.1-Flash-1017
type: image-text-to-text
---

DeepSeek-V4.1-Flash-1017 is a minor update to DeepSeek-V4.1-Flash, delivering substantial improvements across reasoning, coding, agentic tasks, and visual benchmarks. Alongside these gains, the model reduces task execution time and output length, enabling users to complete tasks faster and at lower cost and advancing the performance–cost Pareto frontier across multiple agent harnesses.
