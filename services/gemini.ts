import { GoogleGenAI, Type } from "@google/genai";
import { GrowthStrategyResponse } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateGrowthStrategy = async (
  businessName: string,
  model: string,
  goal: string
): Promise<GrowthStrategyResponse> => {
  if (!apiKey) {
    // Mock data for fallback
    console.warn("No API Key found. Returning mock data.");
    return {
      headline: "Escale suas Vendas com Automação Inteligente.",
      growthPlan: "Implementação de CRM integrado com funil de vendas automatizado e desenvolvimento de App nativo para retenção.",
      techStack: "React Native, Node.js, PostgreSQL, HubSpot API.",
      focusAreas: ["Conversão (CRO)", "LTV", "Retenção", "Performance Mobile"]
    };
  }

  const prompt = `
    Atue como um CTO e Estrategista de Crescimento (Growth Hacker) experiente da "Blend Agency".
    
    Um cliente nos abordou com os seguintes detalhes:
    Nome do Negócio: ${businessName}
    Modelo de Negócio: ${model}
    Meta Principal: ${goal}

    Gere uma estratégia focada em TECNOLOGIA, VENDAS e RESULTADOS em Português do Brasil.
    Não fale sobre cores ou logotipos. Fale sobre código, infraestrutura, funis e receita.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            headline: { type: Type.STRING, description: "Uma frase de impacto focada em resultado/venda." },
            growthPlan: { type: Type.STRING, description: "Estratégia prática de crescimento e aquisição (2-3 frases)." },
            techStack: { type: Type.STRING, description: "Tecnologias sugeridas para escalar (ex: React, AWS, Python)." },
            focusAreas: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "4 KPIs ou áreas de foco técnico/comercial." 
            }
          },
          required: ["headline", "growthPlan", "techStack", "focusAreas"]
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");
    
    return JSON.parse(text) as GrowthStrategyResponse;
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};