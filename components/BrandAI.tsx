import React, { useState } from 'react';
import { ArrowRight, MessageCircle, Sparkles, CheckCircle2, Building2, Target, Rocket, Users } from 'lucide-react';

interface QuizData {
  businessName: string;
  businessType: string;
  challenge: string;
  budget: string;
  name: string;
  phone: string;
}

const BrandAI: React.FC = () => {
  const [step, setStep] = useState(0);
  const [quizData, setQuizData] = useState<QuizData>({
    businessName: '',
    businessType: '',
    challenge: '',
    budget: '',
    name: '',
    phone: ''
  });

  const questions = [
    {
      id: 'businessName',
      title: 'Qual é o nome da sua empresa?',
      subtitle: 'Vamos começar conhecendo seu negócio',
      icon: Building2,
      type: 'text',
      placeholder: 'ex: Tech Solutions LTDA'
    },
    {
      id: 'businessType',
      title: 'Qual o seu tipo de negócio?',
      subtitle: 'Selecione a opção que melhor descreve',
      icon: Target,
      type: 'select',
      options: [
        'E-commerce',
        'SaaS / Plataforma Web',
        'App Mobile',
        'Marketplace',
        'Fintech',
        'Healthtech',
        'Edtech',
        'Outro'
      ]
    },
    {
      id: 'challenge',
      title: 'Qual seu maior desafio agora?',
      subtitle: 'Queremos entender como podemos ajudar',
      icon: Rocket,
      type: 'select',
      options: [
        'Aumentar vendas/conversão',
        'Desenvolver um MVP',
        'Escalar a operação',
        'Automatizar processos',
        'Criar uma plataforma do zero',
        'Modernizar sistema legado',
        'Outro'
      ]
    },
    {
      id: 'budget',
      title: 'Qual o investimento previsto?',
      subtitle: 'Ajuda a criar a melhor proposta para você',
      icon: Sparkles,
      type: 'select',
      options: [
        'Até R$ 30k',
        'R$ 30k - R$ 50k',
        'R$ 50k - R$ 100k',
        'R$ 100k - R$ 200k',
        'Acima de R$ 200k',
        'Ainda não sei'
      ]
    },
    {
      id: 'contact',
      title: 'Como podemos te chamar?',
      subtitle: 'Últimos dados para iniciarmos a conversa',
      icon: Users,
      type: 'contact',
      placeholder: 'Seu nome'
    }
  ];

  const handleInputChange = (field: keyof QuizData, value: string) => {
    setQuizData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = () => {
    // Formatar mensagem para WhatsApp
    const message = `🚀 *Nova Lead - Blend Agency*

📋 *Informações do Negócio:*
🏢 Empresa: ${quizData.businessName}
💼 Tipo: ${quizData.businessType}
🎯 Desafio: ${quizData.challenge}
💰 Investimento: ${quizData.budget}

👤 *Contato:*
Nome: ${quizData.name}
${quizData.phone ? `📱 Telefone: ${quizData.phone}` : ''}

---
_Enviado via Quiz Interativo do Site_`;

    // Número de WhatsApp da Blend Agency
    const whatsappNumber = '5541995175019';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  const currentQuestion = questions[step];
  const progress = ((step + 1) / questions.length) * 100;
  const canProceed = currentQuestion.type === 'contact'
    ? quizData.name.trim() !== ''
    : quizData[currentQuestion.id as keyof QuizData].trim() !== '';

  return (
    <section id="quiz" className="py-24 bg-zinc-950 relative overflow-hidden border-t border-white/5">
      {/* Background Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-mono mb-6 border border-indigo-500/20">
              <MessageCircle size={12} />
              <span>DESCUBRA SUA SOLUÇÃO IDEAL</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-medium text-white mb-4">
              Qual solução <span className="text-gradient-accent">tech</span> é ideal para você?
            </h2>
            <p className="text-gray-400 text-lg">
              Responda 5 perguntas rápidas e fale direto no WhatsApp com nosso time
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-xs font-mono text-gray-500 mb-2">
              <span>Questão {step + 1} de {questions.length}</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-white/10 min-h-[400px] flex flex-col justify-between">
            <div className="animate-fade-in-up">
              {/* Icon */}
              <div className="w-16 h-16 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 border border-indigo-500/20">
                <currentQuestion.icon className="w-8 h-8 text-indigo-400" />
              </div>

              {/* Question */}
              <h3 className="text-2xl md:text-3xl font-display text-white mb-3">
                {currentQuestion.title}
              </h3>
              <p className="text-gray-400 mb-8">{currentQuestion.subtitle}</p>

              {/* Input Fields */}
              {currentQuestion.type === 'text' && (
                <input
                  type="text"
                  value={quizData[currentQuestion.id as keyof QuizData]}
                  onChange={(e) => handleInputChange(currentQuestion.id as keyof QuizData, e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && canProceed && handleNext()}
                  className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white text-lg focus:border-indigo-500 focus:outline-none transition-colors placeholder-gray-700"
                  placeholder={currentQuestion.placeholder}
                  autoFocus
                />
              )}

              {currentQuestion.type === 'select' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {currentQuestion.options?.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        handleInputChange(currentQuestion.id as keyof QuizData, option);
                        setTimeout(handleNext, 300);
                      }}
                      className={`p-4 rounded-lg border-2 text-left transition-all hover:border-indigo-500 hover:bg-indigo-500/10 ${quizData[currentQuestion.id as keyof QuizData] === option
                        ? 'border-indigo-500 bg-indigo-500/10'
                        : 'border-white/10 bg-black/30'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-white">{option}</span>
                        {quizData[currentQuestion.id as keyof QuizData] === option && (
                          <CheckCircle2 className="w-5 h-5 text-indigo-400" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {currentQuestion.type === 'contact' && (
                <div className="space-y-4">
                  <input
                    type="text"
                    value={quizData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white text-lg focus:border-indigo-500 focus:outline-none transition-colors placeholder-gray-700"
                    placeholder="Seu nome completo"
                    autoFocus
                  />
                  <input
                    type="tel"
                    value={quizData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white text-lg focus:border-indigo-500 focus:outline-none transition-colors placeholder-gray-700"
                    placeholder="Telefone (opcional)"
                  />
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex gap-4 mt-8">
              {step > 0 && (
                <button
                  onClick={handleBack}
                  className="px-6 py-3 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-white/30 transition-all"
                >
                  Voltar
                </button>
              )}

              {step < questions.length - 1 ? (
                <button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="flex-1 bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-all flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Próxima
                  <ArrowRight className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  disabled={!canProceed}
                  className="flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold py-4 rounded-lg hover:shadow-[0_0_30px_rgba(99,102,241,0.5)] transition-all flex items-center justify-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Enviar para WhatsApp
                  <MessageCircle className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>

          {/* Trust Elements */}
          <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>100% Gratuito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Sem compromisso</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <span>Resposta rápida</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandAI;