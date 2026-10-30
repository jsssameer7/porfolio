import React, { useState } from 'react';
import { Check, CheckCircle2, RefreshCw, Smartphone, Sprout, GraduationCap, ArrowRight, ShieldCheck, TrendingUp, Sun, CloudRain } from 'lucide-react';

interface SyllabusSubject {
  id: string;
  code: string;
  name: string;
  totalHours: number;
  faculty: string;
  units: { name: string; completed: boolean }[];
}

const INITIAL_SUBJECTS: SyllabusSubject[] = [
  {
    id: 'cs201',
    code: 'CS-201',
    name: 'Data Structures & Algorithms',
    totalHours: 60,
    faculty: 'Prof. K. Sharma',
    units: [
      { name: 'Linear Structures: Arrays, Linked Lists, Stacks & Queues', completed: true },
      { name: 'Non-Linear Trees: BST, AVL & Binary Heaps', completed: true },
      { name: 'Graph Traversal: BFS, DFS & Shortest Path (Dijkstra)', completed: true },
      { name: 'Dynamic Programming & Memoization Techniques', completed: false },
      { name: 'Sorting & Hashing Complexity Analysis', completed: false },
    ],
  },
  {
    id: 'cs202',
    code: 'CS-202',
    name: 'Web Technologies & React.js',
    totalHours: 45,
    faculty: 'Prof. R. Varma',
    units: [
      { name: 'HTML5 Semantic Layouts & CSS3 Flex/Grid', completed: true },
      { name: 'JavaScript ES6+ Asynchronous Promises & Fetch', completed: true },
      { name: 'React Component Architecture & Hooks (useState, useEffect)', completed: true },
      { name: 'Global State Management & Context API', completed: true },
      { name: 'RESTful API Integration & Production Deployment', completed: false },
    ],
  },
  {
    id: 'cs203',
    code: 'CS-203',
    name: 'Database Management Systems (DBMS)',
    totalHours: 50,
    faculty: 'Dr. P. Patel',
    units: [
      { name: 'Relational Model, ER Diagrams & Schema Design', completed: true },
      { name: 'SQL DDL, DML, Joins & Subqueries', completed: true },
      { name: 'Normalization (1NF, 2NF, 3NF, BCNF)', completed: false },
      { name: 'Transactions, ACID Properties & Concurrency Control', completed: false },
      { name: 'Indexing & Query Optimization Techniques', completed: false },
    ],
  },
  {
    id: 'cs204',
    code: 'CS-204',
    name: 'Object Oriented Programming with Java',
    totalHours: 55,
    faculty: 'Prof. S. Nair',
    units: [
      { name: 'Classes, Objects, Inheritance & Polymorphism', completed: true },
      { name: 'Interfaces, Abstract Classes & Packages', completed: true },
      { name: 'Exception Handling & Multi-threading Basics', completed: true },
      { name: 'Java Collections Framework (List, Map, Set)', completed: false },
      { name: 'File I/O & Streams API', completed: false },
    ],
  },
];

// Agri Data
const AGRI_CROPS = [
  {
    id: 'paddy',
    name: 'Paddy / Basmati Rice',
    season: 'Kharif (Monsoon)',
    sowingWindow: 'June – July',
    harvestWindow: 'November – December',
    idealTemp: '22°C – 32°C',
    rainfall: '100 – 150 cm',
    recommendedSeeds: ['Pusa Basmati 1121', 'IR-64 High Yield', 'BPT-5204 (Samba Mahsuri)'],
    marketRate: '₹2,320 / Quintal',
    trend: '+4.2% Seasonal Demand',
    advisory: 'Maintain 2-3 cm standing water during tillering stage. Apply organic micronutrients before flowering.',
  },
  {
    id: 'cotton',
    name: 'Long-Staple Cotton',
    season: 'Kharif (Monsoon)',
    sowingWindow: 'May – June',
    harvestWindow: 'October – January',
    idealTemp: '21°C – 30°C',
    rainfall: '50 – 85 cm',
    recommendedSeeds: ['Bt-Cotton Hybrid RCH-2', 'Suraj Extra-Long', 'Ankur-3028'],
    marketRate: '₹7,120 / Quintal',
    trend: '+6.8% Export Demand',
    advisory: 'Deep black loamy soil with proper drainage prevents root rot. Monitor bollworm traps regularly.',
  },
  {
    id: 'wheat',
    name: 'Durum & Bread Wheat',
    season: 'Rabi (Winter)',
    sowingWindow: 'October – November',
    harvestWindow: 'March – April',
    idealTemp: '15°C – 22°C',
    rainfall: '35 – 55 cm',
    recommendedSeeds: ['HD-2967 High Yield', 'PBW-550 Rust Resistant', 'Sharbati Gold'],
    marketRate: '₹2,425 / Quintal',
    trend: '+3.1% MSP Benchmark',
    advisory: 'First irrigation at Crown Root Initiation (CRI) stage 21 days after sowing is critical for grain yield.',
  },
  {
    id: 'maize',
    name: 'Hybrid Yellow Maize',
    season: 'Kharif / Zaid',
    sowingWindow: 'June – July & Feb – March',
    harvestWindow: '90 – 105 days after sowing',
    idealTemp: '20°C – 28°C',
    rainfall: '60 – 90 cm',
    recommendedSeeds: ['Pioneer P3396', 'DeKalb 9108', 'Ganga Safed-2'],
    marketRate: '₹2,090 / Quintal',
    trend: '+5.4% Feed Sector',
    advisory: 'Ensure well-aerated sandy loam. Avoid waterlogging during vegetative silk phase.',
  },
];

// Comparison Gadgets
const COMPARISON_GADGETS = [
  {
    id: 'pixel8',
    name: 'Google Pixel 8 Pro',
    category: 'Flagship Smartphone',
    processor: 'Google Tensor G3 (Titan M2 security)',
    display: '6.7" Super Actua OLED 1-120Hz LTPO',
    cameras: '50MP Main + 48MP Ultrawide + 48MP 5x Telephoto',
    battery: '5050 mAh (30W fast charging)',
    weight: '213 g',
    os: 'Android 14 (7 Years OS Updates)',
    price: '$999 / ₹84,000',
    highlightAdvantage: 'Industry-leading computational photography and 7 years of OS upgrades.',
  },
  {
    id: 'iphone15',
    name: 'Apple iPhone 15 Pro',
    category: 'Flagship Smartphone',
    processor: 'Apple A17 Pro (3nm architecture)',
    display: '6.1" Super Retina XDR ProMotion 120Hz',
    cameras: '48MP Main + 12MP Ultrawide + 12MP 3x Telephoto',
    battery: '3274 mAh (MagSafe wireless charging)',
    weight: '187 g (Titanium grade 5)',
    os: 'iOS 17',
    price: '$999 / ₹89,900',
    highlightAdvantage: 'Grade 5 aerospace titanium body with superior single-core performance.',
  },
  {
    id: 'sonywh',
    name: 'Sony WH-1000XM5',
    category: 'ANC Headphones',
    processor: 'Integrated Processor V1 + QN1 HD',
    display: 'Touch gesture earcups + Speak-to-Chat',
    cameras: '8 Microphones with AI beamforming',
    battery: '30 Hours ANC ON (3 min charge = 3 hrs)',
    weight: '250 g',
    os: 'LDAC, DSEE Extreme, Multipoint',
    price: '$399 / ₹29,990',
    highlightAdvantage: 'Reference-class Active Noise Cancelling with lightweight noiseless design.',
  },
  {
    id: 'bose700',
    name: 'Bose QuietComfort Ultra',
    category: 'ANC Headphones',
    processor: 'Custom Bose Immersive Audio DSP',
    display: 'Capacitive volume strip & physical clickers',
    cameras: 'Adaptive mic system for voice isolation',
    battery: '24 Hours playback (18 hrs Immersive)',
    weight: '252 g',
    os: 'Snapdragon Sound, aptX Adaptive',
    price: '$429 / ₹35,900',
    highlightAdvantage: 'Spatial Immersive Audio mode with ultra-plush protein leather earcups.',
  },
];

export const InteractiveSandbox: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ams' | 'agri' | 'compare'>('ams');

  // AMS state
  const [subjects, setSubjects] = useState<SyllabusSubject[]>(INITIAL_SUBJECTS);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('cs201');

  // Agri state
  const [selectedCropId, setSelectedCropId] = useState<string>('paddy');

  // Comparison state
  const [gadgetAId, setGadgetAId] = useState<string>('pixel8');
  const [gadgetBId, setGadgetBId] = useState<string>('iphone15');

  // Toggle unit completion in AMS
  const toggleUnit = (subjectId: string, unitIndex: number) => {
    setSubjects((prev) =>
      prev.map((sub) => {
        if (sub.id !== subjectId) return sub;
        const newUnits = [...sub.units];
        newUnits[unitIndex] = {
          ...newUnits[unitIndex],
          completed: !newUnits[unitIndex].completed,
        };
        return { ...sub, units: newUnits };
      })
    );
  };

  // Compute stats for AMS
  const totalUnitsAcrossCourses = subjects.reduce((sum, s) => sum + s.units.length, 0);
  const completedUnitsAcrossCourses = subjects.reduce(
    (sum, s) => sum + s.units.filter((u) => u.completed).length,
    0
  );
  const overallCompletionRate = Math.round(
    (completedUnitsAcrossCourses / totalUnitsAcrossCourses) * 100
  );

  const currentSubject = subjects.find((s) => s.id === selectedSubjectId) || subjects[0];
  const currentSubCompleted = currentSubject.units.filter((u) => u.completed).length;
  const currentSubPercentage = Math.round(
    (currentSubCompleted / currentSubject.units.length) * 100
  );

  const selectedCrop = AGRI_CROPS.find((c) => c.id === selectedCropId) || AGRI_CROPS[0];
  const gadgetA = COMPARISON_GADGETS.find((g) => g.id === gadgetAId) || COMPARISON_GADGETS[0];
  const gadgetB = COMPARISON_GADGETS.find((g) => g.id === gadgetBId) || COMPARISON_GADGETS[1];

  return (
    <section id="interactive-sandbox" className="py-24 border-b border-slate-800/80 bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3 tracking-wide uppercase">
            <span>Functional Interactive Sandbox</span>
            <span aria-hidden="true">·</span>
            <span>Live Project Simulators</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            Try My Projects in Action
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Interact with live simulations of the key features from my projects. Test the Academic
            Management System curriculum tracker, inspect agricultural seasonal crop advice, or run a
            gadget specification comparison.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-2 mb-8 border-b border-slate-800 pb-4 overflow-x-auto">
          <button
            onClick={() => setActiveTab('ams')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'ams'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Academic Management System (AMS)</span>
          </button>

          <button
            onClick={() => setActiveTab('agri')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'agri'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Sprout className="w-4 h-4" />
            <span>Farmer Support Agri-Advisor</span>
          </button>

          <button
            onClick={() => setActiveTab('compare')}
            className={`px-4 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer ${
              activeTab === 'compare'
                ? 'bg-blue-600 text-white shadow-sm'
                : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>Product Comparison Engine</span>
          </button>
        </div>

        {/* Sandbox Content Panes */}

        {/* Pane 1: Academic Management System (AMS) */}
        {activeTab === 'ams' && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800 mb-8">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                  <span>Semester IV Curriculum Progress</span>
                  <span aria-hidden="true">·</span>
                  <span>Real-time Velocity</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Academic Syllabus Completion Engine
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Click on syllabus units below to toggle their completion status and observe real-time recalculations.
                </p>
              </div>

              {/* Overall Semester Progress Indicator */}
              <div className="flex items-center gap-4 bg-slate-900/90 border border-slate-800 p-4 rounded-xl shrink-0">
                <div className="text-right">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Institutional Progress
                  </div>
                  <div className="text-2xl font-bold text-white font-mono tabular-nums">
                    {overallCompletionRate}%
                  </div>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-slate-800 flex items-center justify-center relative">
                  <div
                    className="absolute inset-0 rounded-full border-4 border-blue-500 transition-all duration-500"
                    style={{
                      clipPath: `polygon(50% 50%, 50% 0%, ${
                        overallCompletionRate > 25 ? '100% 0%,' : ''
                      }${overallCompletionRate > 50 ? '100% 100%,' : ''}${
                        overallCompletionRate > 75 ? '0% 100%,' : ''
                      } 0% 0%)`,
                    }}
                  />
                  <span className="text-xs font-mono font-bold text-blue-400">
                    {completedUnitsAcrossCourses}/{totalUnitsAcrossCourses}
                  </span>
                </div>
              </div>
            </div>

            {/* Course Selector Tabs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
              {subjects.map((sub) => {
                const subComp = sub.units.filter((u) => u.completed).length;
                const subPct = Math.round((subComp / sub.units.length) * 100);
                const isSelected = sub.id === selectedSubjectId;

                return (
                  <button
                    key={sub.id}
                    onClick={() => setSelectedSubjectId(sub.id)}
                    className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-blue-950/40 border-blue-500/80 shadow-md'
                        : 'bg-slate-900/50 border-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-1">
                      <span>{sub.code}</span>
                      <span className="font-semibold text-white tabular-nums">{subPct}%</span>
                    </div>
                    <div className="text-xs font-bold text-white line-clamp-1 mb-2">
                      {sub.name}
                    </div>
                    {/* Mini Progress Bar */}
                    <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all duration-300 ${
                          subPct >= 80 ? 'bg-emerald-500' : subPct >= 50 ? 'bg-blue-500' : 'bg-amber-500'
                        }`}
                        style={{ width: `${subPct}%` }}
                      />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Current Subject Detailed Unit Checkpoints */}
            <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-blue-400">
                    <span>{currentSubject.code}</span>
                    <span>·</span>
                    <span>Faculty: {currentSubject.faculty}</span>
                    <span>·</span>
                    <span>{currentSubject.totalHours} Credit Hours</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mt-1">{currentSubject.name}</h4>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400">
                    Status:{' '}
                    <strong
                      className={
                        currentSubPercentage >= 80
                          ? 'text-emerald-400'
                          : currentSubPercentage >= 50
                          ? 'text-blue-400'
                          : 'text-amber-400'
                      }
                    >
                      {currentSubPercentage >= 80
                        ? 'Ahead of Schedule'
                        : currentSubPercentage >= 50
                        ? 'On Track'
                        : 'Action Required'}
                    </strong>
                  </span>
                  <button
                    onClick={() => setSubjects(INITIAL_SUBJECTS)}
                    className="p-1.5 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                    title="Reset to Default State"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Unit Checklist */}
              <div className="space-y-3">
                {currentSubject.units.map((unit, uIdx) => (
                  <div
                    key={uIdx}
                    onClick={() => toggleUnit(currentSubject.id, uIdx)}
                    className={`flex items-start gap-3 p-3.5 rounded-lg border transition-colors cursor-pointer select-none ${
                      unit.completed
                        ? 'bg-blue-950/20 border-blue-900/50 text-slate-200'
                        : 'bg-slate-950/40 border-slate-800/80 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5 border ${
                        unit.completed
                          ? 'bg-blue-600 border-blue-500 text-white'
                          : 'border-slate-700 bg-slate-900'
                      }`}
                    >
                      {unit.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>

                    <div className="flex-1 text-xs sm:text-sm">
                      <div className="font-medium">
                        Unit 0{uIdx + 1}: {unit.name}
                      </div>
                      <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                        {unit.completed ? 'Completed & Verified in Syllabus Register' : 'Pending Verification'}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Pane 2: Farmer Support Website (Agri-Advisor) */}
        {activeTab === 'agri' && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 mb-1">
                  <span>Agricultural Advisory Portal</span>
                  <span aria-hidden="true">·</span>
                  <span>Live Crop Intelligence</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Seasonal Sowing &amp; Seed Market Rate Advisor
                </h3>
              </div>

              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Weather Synchronized</span>
              </div>
            </div>

            {/* Crop Selector Chips */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              {AGRI_CROPS.map((crop) => (
                <button
                  key={crop.id}
                  onClick={() => setSelectedCropId(crop.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                    crop.id === selectedCropId
                      ? 'bg-emerald-600 text-white'
                      : 'bg-slate-900 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  {crop.name}
                </button>
              ))}
            </div>

            {/* Crop Advisory Detail Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Essential Metrics */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <div className="text-xs font-mono text-slate-400 mb-1">Current Seed Market Benchmark</div>
                  <div className="text-2xl sm:text-3xl font-bold text-emerald-400 font-mono tabular-nums">
                    {selectedCrop.marketRate}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{selectedCrop.trend}</span>
                  </div>
                </div>

                <div className="p-4 bg-slate-900/60 border border-slate-800 rounded-xl space-y-2.5 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Season</span>
                    <span className="font-semibold text-white">{selectedCrop.season}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Optimal Sowing Window</span>
                    <span className="font-semibold text-white">{selectedCrop.sowingWindow}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Harvest Timeline</span>
                    <span className="font-semibold text-white">{selectedCrop.harvestWindow}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Ideal Ambient Temp</span>
                    <span className="font-mono text-white">{selectedCrop.idealTemp}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span className="text-slate-400">Required Rainfall</span>
                    <span className="font-mono text-white">{selectedCrop.rainfall}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Recommended Certified Varieties & Agronomy Tips */}
              <div className="lg:col-span-7 space-y-4">
                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 font-mono flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Recommended Certified High-Yield Varieties</span>
                  </h4>
                  <div className="space-y-2">
                    {selectedCrop.recommendedSeeds.map((seed, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 bg-slate-950/60 border border-slate-800/80 rounded-lg text-xs"
                      >
                        <span className="text-white font-medium">{seed}</span>
                        <span className="text-emerald-400 font-mono text-[11px]">Certified High Yield</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 bg-slate-900/60 border border-slate-800 rounded-xl">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2 font-mono">
                    Agronomy &amp; Soil Preparation Advisory
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {selectedCrop.advisory}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Pane 3: Product Comparison Engine */}
        {activeTab === 'compare' && (
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-1">
                  <span>Hardware Specification Differential</span>
                  <span aria-hidden="true">·</span>
                  <span>Normalized Comparison Engine</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Electronic Product Specification Matrix
                </h3>
              </div>
            </div>

            {/* Device Selectors */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">Device 1 (Primary)</label>
                <select
                  value={gadgetAId}
                  onChange={(e) => setGadgetAId(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  {COMPARISON_GADGETS.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.name} ({g.category})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 mb-2">Device 2 (Comparison)</label>
                <select
                  value={gadgetBId}
                  onChange={(e) => setGadgetBId(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl p-2.5 text-xs sm:text-sm text-white focus:outline-none focus:border-blue-500 cursor-pointer"
                >
                  {COMPARISON_GADGETS.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.name} ({g.category})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Differential Comparison Table */}
            <div className="border border-slate-800 rounded-xl overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-900/90 border-b border-slate-800 text-slate-400 font-mono">
                    <th className="p-3.5 font-medium">Specification</th>
                    <th className="p-3.5 font-medium text-white">{gadgetA.name}</th>
                    <th className="p-3.5 font-medium text-white">{gadgetB.name}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-slate-300">
                  <tr>
                    <td className="p-3.5 text-slate-400 font-mono">Category</td>
                    <td className="p-3.5 font-medium">{gadgetA.category}</td>
                    <td className="p-3.5 font-medium">{gadgetB.category}</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-slate-400 font-mono">Processor / DSP</td>
                    <td className="p-3.5">{gadgetA.processor}</td>
                    <td className="p-3.5">{gadgetB.processor}</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-slate-400 font-mono">Display / Interface</td>
                    <td className="p-3.5">{gadgetA.display}</td>
                    <td className="p-3.5">{gadgetB.display}</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-slate-400 font-mono">Battery Life &amp; Charging</td>
                    <td className="p-3.5 font-mono">{gadgetA.battery}</td>
                    <td className="p-3.5 font-mono">{gadgetB.battery}</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-slate-400 font-mono">Form Factor Weight</td>
                    <td className="p-3.5 font-mono">{gadgetA.weight}</td>
                    <td className="p-3.5 font-mono">{gadgetB.weight}</td>
                  </tr>
                  <tr>
                    <td className="p-3.5 text-slate-400 font-mono">Market Price</td>
                    <td className="p-3.5 font-bold text-white font-mono">{gadgetA.price}</td>
                    <td className="p-3.5 font-bold text-white font-mono">{gadgetB.price}</td>
                  </tr>
                  <tr className="bg-slate-900/40">
                    <td className="p-3.5 text-slate-400 font-mono">Advantage Verdict</td>
                    <td className="p-3.5 text-xs text-blue-300 leading-relaxed">{gadgetA.highlightAdvantage}</td>
                    <td className="p-3.5 text-xs text-blue-300 leading-relaxed">{gadgetB.highlightAdvantage}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
