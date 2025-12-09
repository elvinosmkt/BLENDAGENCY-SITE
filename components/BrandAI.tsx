import React, { useState } from 'react';
import { generateGrowthStrategy } from '../services/gemini';
import { GrowthStrategyResponse } from '../types';
import { Sparkles, Loader2, RefreshCw, TrendingUp } from 'lucide-react';

const BrandAI: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [model, setModel] = useState('');
  const [goal, setGoal] = useState('');
  const [result, setResult] = useState<GrowthStrategyResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!businessName || !model || !goal) return;

    setLoading(true);
    setError('');
    setResult(null);

    try {
      const data = await generateGrowthStrategy(businessName, model, goal);
      setResult(data);
    } catch (err) {
      setError('Falha ao gerar estratégia. Verifique a chave da API ou tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-lab" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-6 border border-indigo-500/20">
            <TrendingUp size={12} />
            <span>BLEND GROWTH LABS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-6">
            Estratégia de <span className="text-gradient-accent">Crescimento & Tech</span> instantânea.
          </h2>
          <p className="text-gray-400 text-lg">
            Descubra como a tecnologia certa pode escalar suas vendas. Receba uma microestratégia de growth e stack tecnológico personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Form */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <form onSubmit={handleGenerate} className="space-y-6">
              <div>
                <label className="block text-gray-400 text-sm font-mono mb-2">Nome da Empresa</label>
                <input 
                  type="text" 
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-indigo-500 focus:outline-none transition-colors placeholder-gray-700"
                  placeholder="ex: FinTech Solutions"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-mono mb-2">Modelo de Negócio</label>
                <input 
                  type="text" 
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-indigo-500 focus:outline-none transition-colors placeholder-gray-700"
                  placeholder="ex: SaaS B2B, E-commerce, Marketplace"
                />
              </div>
              <div>
                <label className="block text-gray-400 text-sm font-mono mb-2">Meta Principal</label>
                <input 
                  type="text" 
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-indigo-500 focus:outline-none transition-colors placeholder-gray-700"
                  placeholder="ex: Aumentar leads em 50%, Automatizar vendas"
                />
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? <Loader2 className="animate-spin" /> : 'Gerar Estratégia de Growth'}
              </button>
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            </form>
          </div>

          {/* Result Display */}
          <div className="relative min-h-[400px]">
            {result ? (
              <div className="animate-fade-in-up bg-gradient-to-br from-indigo-900/20 to-zinc-900/50 p-8 rounded-2xl border border-indigo-500/30 h-full flex flex-col justify-center">
                <div className="mb-8">
                  <h4 className="text-indigo-400 font-mono text-xs uppercase mb-2">Sua Headline de Vendas</h4>
                  <p className="text-2xl md:text-3xl font-display text-white font-medium leading-tight">
                    "{result.headline}"
                  </p>
                </div>
                
                <div className="mb-8">
                  <h4 className="text-green-400 font-mono text-xs uppercase mb-2">Plano de Crescimento</h4>
                  <p className="text-gray-300 leading-relaxed border-l-2 border-green-500 pl-4">
                    {result.growthPlan}
                  </p>
                </div>

                <div className="mb-8">
                   <h4 className="text-blue-400 font-mono text-xs uppercase mb-2">Tech Stack Sugerida</h4>
                   <p className="text-gray-300 text-sm font-mono bg-black/30 p-3 rounded border border-white/10">{result.techStack}</p>
                </div>

                <div>
                  <h4 className="text-indigo-400 font-mono text-xs uppercase mb-3">KPIs de Foco</h4>
                  <div className="flex flex-wrap gap-2">
                    {result.focusAreas.map((kw, i) => (
                      <span key={i} className="px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-xs text-indigo-100">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/10 text-center">
                   <button onClick={() => setResult(null)} className="text-sm text-gray-500 hover:text-white flex items-center justify-center gap-2 mx-auto">
                     <RefreshCw size={14} /> Nova Consulta
                   </button>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center border border-dashed border-gray-800 rounded-2xl p-8 text-center text-gray-600">
                {!loading && (
                    <>
                        <TrendingUp className="w-12 h-12 mb-4 opacity-20" />
                        <p>Receba um plano de ação tático gerado por IA para o seu negócio.</p>
                    </>
                )}
                {loading && (
                     <div className="flex flex-col items-center gap-4">
                         <div className="w-16 h-1 bg-gray-800 rounded-full overflow-hidden">
                             <div className="h-full bg-indigo-500 animate-[marquee_1s_linear_infinite]"></div>
                         </div>
                         <p className="font-mono text-xs animate-pulse text-indigo-400">Compilando estratégias de mercado...</p>
                     </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAI;