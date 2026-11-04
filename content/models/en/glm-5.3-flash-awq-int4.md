---
name: GLM-5.3-Flash-AWQ-INT4
publish_date: 2026-09-19
parameters: 56736897886
v_ram: 256
context_window: 1048576
publisher: cyankiwi
icon: /media/4i5ocsmQodlXnvdJCVnNx.png
meta_data:
  code: |-
    {
      "_id": "6a926e75597df1d081f72640",
      "id": "cyankiwi/GLM-5.3-Flash-AWQ-INT4",
      "private": false,
      "pipeline_tag": "image-text-to-text",
      "library_name": "transformers",
      "tags": [
        "transformers",
        "safetensors",
        "glm5_next",
        "image-text-to-text",
        "conversational",
        "en",
        "zh",
        "arxiv:2602.15763",
        "base_model:zai-org/GLM-5.3-Flash",
        "base_model:quantized:zai-org/GLM-5.3-Flash",
        "license:mit",
        "endpoints_compatible",
        "compressed-tensors",
        "region:us"
      ],
      "downloads": 1559,
      "likes": 12,
      "modelId": "cyankiwi/GLM-5.3-Flash-AWQ-INT4",
      "author": "cyankiwi",
      "sha": "41e7b7628b5ad082f12ac895bba39b8c597bcf41",
      "lastModified": "2026-10-19T16:14:12.000Z",
      "gated": false,
      "disabled": false,
      "spaces": [],
      "createdAt": "2026-08-29T05:30:29.000Z",
      "safetensors": {
        "parameters": {
          "BF16": 3399541374,
          "F8_E4M3": 15535702016,
          "F32": 3635424,
          "I32": 37798019072
        },
        "total": 56736897886
      },
      "usedStorage": 409965918033
    }
  lang: plain
hf_url: https://huggingface.co/cyankiwi/GLM-5.3-Flash-AWQ-INT4
type: image-to-image
---

We introduce GLM-5.3-Flash, the first natively multimodal model in the GLM-5 series. With 320B total parameters and just 18B active parameters, it outperforms GLM-5.2 across benchmarks and real-world workloads at one-tenth the price, while approaching Claude Opus 4.8 on coding and agentic benchmarks.
