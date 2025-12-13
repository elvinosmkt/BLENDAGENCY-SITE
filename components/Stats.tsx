import React from 'react';
import { TrendingUp, Users, Zap, Award } from 'lucide-react';

interface Stat {
    id: string;
    value: string;
    label: string;
    icon: React.ReactNode;
    color: string;
}

const stats: Stat[] = [
    {
        id: '1',
        value: '50+',
        label: 'Projetos Entregues',
        icon: <Award className="w-8 h-8" />,
        color: 'text-indigo-500'
    },
    {
        id: '2',
        value: '300%',
        label: 'ROI Médio dos Clientes',
        icon: <TrendingUp className="w-8 h-8" />,
        color: 'text-green-500'
    },
    {
        id: '3',
        value: '10M+',
        label: 'Usuários Impactados',
        icon: <Users className="w-8 h-8" />,
        color: 'text-purple-500'
    },
    {
        id: '4',
        value: '99.9%',
        label: 'Uptime Garantido',
        icon: <Zap className="w-8 h-8" />,
        color: 'text-yellow-500'
    }
];

const Stats: React.FC = () => {
    return (
        <section className="py-24 bg-brand-black relative overflow-hidden border-y border-white/5">
            {/* Grid Background Effect */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.id}
                            className="text-center group hover:scale-110 transition-transform duration-300"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Icon */}
                            <div className="flex justify-center mb-4">
                                <div className={`${stat.color} group-hover:scale-125 transition-transform duration-300`}>
                                    {stat.icon}
                                </div>
                            </div>

                            {/* Value */}
                            <div className="mb-2">
                                <span className="text-5xl md:text-6xl font-display font-bold text-white group-hover:text-gradient-accent transition-all">
                                    {stat.value}
                                </span>
                            </div>

                            {/* Label */}
                            <p className="text-gray-500 font-mono text-xs md:text-sm uppercase tracking-wider">
                                {stat.label}
                            </p>

                            {/* Animated underline */}
                            <div className="mt-4 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
