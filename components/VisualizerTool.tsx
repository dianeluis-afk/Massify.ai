
import React, { useState } from 'react';
import { generateStartupImage } from '../services/geminiService';
import { AspectRatio, ImageSize, GeneratedAsset } from '../types';

interface Props {
  onResetKey: () => void;
}

const VisualizerTool: React.FC<Props> = ({ onResetKey }) => {
  const [prompt, setPrompt] = useState('');
  const [size, setSize] = useState<ImageSize>(ImageSize.K1);
  const [ratio, setRatio] = useState<AspectRatio>(AspectRatio.RATIO_16_9);
  const [isGenerating, setIsGenerating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [assets, setAssets] = useState<GeneratedAsset[]>([]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setError(null);

    try {
      const imageUrl = await generateStartupImage(prompt, ratio, size);
      const newAsset: GeneratedAsset = {
        id: Date.now().toString(),
        url: imageUrl,
        prompt: prompt,
        timestamp: Date.now()
      };
      setAssets([newAsset, ...assets]);
      setPrompt('');
    } catch (err: any) {
      if (err.message === 'API_KEY_ERROR') {
        onResetKey();
      } else {
        setError(err.message || 'Something went wrong during generation.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-12">
      <div className="text-center space-y-4">
        <div className="text-blue-600 font-bold tracking-widest uppercase text-xs">Proof of Concept</div>
        <h2 className="text-4xl font-bold tracking-tight text-slate-900">Manifest Your Vision</h2>
        <p className="text-slate-600 max-w-xl mx-auto leading-relaxed">
          Generate high-fidelity brand assets that make your vision feel real instantly.
        </p>
      </div>

      <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-xl shadow-slate-200/50 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <label className="text-sm font-bold text-slate-700 uppercase tracking-widest">Describe the vibe</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="A minimalist sustainable farm-to-table delivery service, earthy tones..."
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-6 text-slate-900 placeholder-slate-400 focus:ring-2 focus:ring-blue-600 focus:bg-white outline-none transition-all h-40 resize-none"
            />
          </div>
          
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Resolution</label>
                <div className="grid grid-cols-3 gap-2">
                  {Object.values(ImageSize).map((s) => (
                    <button
                      key={s}
                      onClick={() => setSize(s)}
                      className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                        size === s 
                          ? 'bg-blue-600 border-blue-600 text-white' 
                          : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Format</label>
                <select
                  value={ratio}
                  onChange={(e) => setRatio(e.target.value as AspectRatio)}
                  className="w-full bg-white border border-slate-200 rounded-xl p-3 text-sm text-slate-700 outline-none focus:ring-2 focus:ring-blue-600"
                >
                  {Object.values(AspectRatio).map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full py-5 bg-slate-900 text-white hover:bg-black disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl font-black text-lg transition-all shadow-xl shadow-slate-200"
            >
              {isGenerating ? 'Manifesting...' : 'Visualize My Idea'}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-100 text-red-600 p-4 rounded-xl text-sm">
            {error}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {assets.map((asset) => (
          <div key={asset.id} className="group bg-white rounded-3xl p-3 border border-slate-100 overflow-hidden transition-all hover:translate-y-[-4px] shadow-sm hover:shadow-xl">
            <div className="aspect-video relative rounded-2xl overflow-hidden mb-4 bg-slate-50">
              <img src={asset.url} alt={asset.prompt} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <button 
                  onClick={() => {
                    const link = document.createElement('a');
                    link.href = asset.url;
                    link.download = `massify-vision-${asset.id}.png`;
                    link.click();
                  }}
                  className="w-full py-3 bg-white text-slate-900 rounded-xl text-xs font-bold transition-colors hover:bg-slate-100"
                >
                  Download High-Res
                </button>
              </div>
            </div>
            <div className="px-2 pb-2 flex justify-between items-center">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Asset v1.{asset.id.slice(-2)}</span>
              <span className="text-[10px] text-slate-400">{new Date(asset.timestamp).toLocaleTimeString()}</span>
            </div>
          </div>
        ))}
        {assets.length === 0 && !isGenerating && (
          <div className="col-span-full py-32 text-center border-2 border-dashed border-slate-200 rounded-[40px] bg-white/50">
            <p className="text-slate-400 font-medium">Your manifestations will appear here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default VisualizerTool;
