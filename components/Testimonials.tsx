import React from 'react';
import { Star, Quote } from 'lucide-react';

interface Testimonial {
    id: string;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        id: '1',
        name: 'Rafael Costa',
        role: 'CEO',
        company: 'NeoFinance',
        content: 'A Blend transformou nossa visão em um app de investimentos que superou 100k downloads em 3 meses. O ROI foi 300% acima do esperado.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
    },
    {
        id: '2',
        name: 'Mariana Silva',
        role: 'CMO',
        company: 'LogiTech SaaS',
        content: 'Implementaram um dashboard que revolucionou nossa operação. A equipe é técnica, mas entende profundamente de negócios e métricas.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop'
    },
    {
        id: '3',
        name: 'Carlos Mendes',
        role: 'Founder',
        company: 'Retail Giants',
        content: 'Nossa conversão aumentou 85% após otimizarem nosso funil. Blend é sinônimo de crescimento baseado em dados.',
        rating: 5,
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop'
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-32 bg-gradient-to-b from-brand-dark to-brand-black relative overflow-hidden">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[150px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h3 className="text-indigo-500 font-mono text-sm tracking-widest mb-4">DEPOIMENTOS</h3>
                    <h2 className="text-4xl md:text-6xl font-display font-medium text-white max-w-3xl mx-auto">
                        Quem confia na <span className="text-gradient-accent">Blend</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Quote Icon */}
                            <Quote className="text-indigo-500/30 w-10 h-10 mb-6" />

                            {/* Rating */}
                            <div className="flex gap-1 mb-6">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-gray-300 leading-relaxed mb-8 italic">
                                "{testimonial.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.name}
                                    className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500/30"
                                />
                                <div>
                                    <p className="text-white font-semibold">{testimonial.name}</p>
                                    <p className="text-gray-500 text-sm">{testimonial.role} @ {testimonial.company}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-16">
                    <p className="text-gray-500 font-mono text-sm">
                        + de 50 empresas já escalaram com a Blend
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
