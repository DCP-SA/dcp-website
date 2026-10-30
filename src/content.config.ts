import {
	defineCollection,
	type SchemaContext,
} from "astro:content";
import { z } from 'astro/zod'
import { glob } from "astro/loaders";

const models = defineCollection({
	loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./content/models" }),
	schema: z.object({
		name: z.string(),
		publish_date: z.coerce.date(),
		parameters: z.int(),
		v_ram: z.int(),
		context_window: z.int().nullish().optional(),
		publisher: z.string(),
		icon: z.string(),
		hf_url: z.string(),
		type: z.string(),
	}),
});

export const collections = {
	models,
};