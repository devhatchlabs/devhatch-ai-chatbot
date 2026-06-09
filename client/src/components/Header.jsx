// // import React, { useState, useEffect } from 'react';
// // import { 
// //   FaRobot, FaBell, FaUserCircle, FaChevronDown, FaSignOutAlt,
// //   FaPizzaSlice, FaDownload, FaTrashAlt, FaTimes, FaTag,
// //   FaTruck, FaInfoCircle, FaUser, FaCog, FaHistory, FaTimesCircle
// // } from 'react-icons/fa';
// // import { MdOnlinePrediction, MdClearAll } from 'react-icons/md';
// // import { GiHamburgerMenu } from 'react-icons/gi';
// // import { toast } from 'react-hot-toast';

// // function Header({ onClearChat, onExportChat, onDeleteLastMessage }) {
// //   const [scrolled, setScrolled] = useState(false);
// //   const [showDropdown, setShowDropdown] = useState(false);
// //   const [showMobileMenu, setShowMobileMenu] = useState(false);
// //   const [showNotifications, setShowNotifications] = useState(false);
// //   const [showProfileModal, setShowProfileModal] = useState(false);
// //   const [showSettingsModal, setShowSettingsModal] = useState(false);
  
// //   const [notifications, setNotifications] = useState([
// //     { id: 1, title: 'New Pizza Deal!', message: 'Buy 1 Get 1 Free on Large Pizzas', time: '2 min ago', read: false, icon: FaTag, color: 'text-yellow-400' },
// //     { id: 2, title: 'Delivery Hours Extended', message: 'Now delivering until 2 AM', time: '1 hour ago', read: false, icon: FaTruck, color: 'text-green-400' },
// //     { id: 3, title: 'Server Status', message: 'Backend server is running smoothly', time: '5 min ago', read: false, icon: FaInfoCircle, color: 'text-blue-400' }
// //   ]);

// //   useEffect(() => {
// //     const handleScroll = () => setScrolled(window.scrollY > 10);
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   // Close dropdowns when clicking outside
// //   useEffect(() => {
// //     const handleClickOutside = (e) => {
// //       if (!e.target.closest('.dropdown-container')) {
// //         setShowDropdown(false);
// //       }
// //       if (!e.target.closest('.notifications-container')) {
// //         setShowNotifications(false);
// //       }
// //     };
    
// //     document.addEventListener('click', handleClickOutside);
// //     return () => document.removeEventListener('click', handleClickOutside);
// //   }, []);

// //   const unreadCount = notifications.filter(n => !n.read).length;

// //   // Profile Modal Component
// //   const ProfileModal = () => (
// //     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
// //       <div 
// //         className="absolute inset-0 bg-black/90 backdrop-blur-md" 
// //         onClick={() => setShowProfileModal(false)} 
// //       />
// //       <div className="relative bg-gradient-to-b from-[#162038] to-[#0D1730] border border-[#2a3560] rounded-2xl shadow-2xl max-w-md w-full p-6 animate-slideInLeft z-[101]">
// //         <button 
// //           onClick={() => setShowProfileModal(false)}
// //           className="absolute top-4 right-4 text-[#94a3b8] hover:text-white transition-colors z-[102]"
// //         >
// //           <FaTimesCircle className="w-5 h-5" />
// //         </button>
        
// //         <div className="flex flex-col items-center text-center">
// //           <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center mb-4 shadow-lg">
// //             <FaRobot className="w-10 h-10 text-white" />
// //           </div>
// //           <h2 className="text-white text-xl font-bold mb-1">DevHatch Labs</h2>
// //           <p className="text-[#94a3b8] text-sm mb-4">admin@devhatchlabs.com</p>
          
// //           <div className="w-full border-t border-[#2a3560] pt-4 mt-2">
// //             <div className="space-y-3">
// //               <div className="flex justify-between items-center">
// //                 <span className="text-[#94a3b8] text-sm">Organization</span>
// //                 <span className="text-white text-sm font-medium">DevHatch Labs</span>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-[#94a3b8] text-sm">Total chats</span>
// //                 <span className="text-white text-sm font-medium">1,247 conversations</span>
// //               </div>
// //               <div className="flex justify-between items-center">
// //                 <span className="text-[#94a3b8] text-sm">Status</span>
// //                 <span className="text-green-400 text-sm font-medium flex items-center gap-1">
// //                   <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
// //                   Active
// //                 </span>
// //               </div>
// //             </div>
// //           </div>
          
// //           <button 
// //             onClick={() => setShowProfileModal(false)}
// //             className="mt-6 w-full py-2.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-all font-medium"
// //           >
// //             Close
// //           </button>
// //         </div>
// //       </div>
// //     </div>
// //   );

// //   // Settings Modal Component
// //   const SettingsModal = () => (
// //     <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
// //       <div 
// //         className="absolute inset-0 bg-black/90 backdrop-blur-md" 
// //         onClick={() => setShowSettingsModal(false)} 
// //       />
// //       <div className="relative bg-gradient-to-b from-[#162038] to-[#0D1730] border border-[#2a3560] rounded-2xl shadow-2xl max-w-md w-full p-6 animate-slideInRight z-[101]">
// //         <button 
// //           onClick={() => setShowSettingsModal(false)}
// //           className="absolute top-4 right-4 text-[#94a3b8] hover:text-white transition-colors z-[102]"
// //         >
// //           <FaTimesCircle className="w-5 h-5" />
// //         </button>
        
// //         <div className="flex items-center gap-3 mb-6">
// //           <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center">
// //             <FaCog className="w-5 h-5 text-white" />
// //           </div>
// //           <h2 className="text-white text-xl font-bold">Settings</h2>
// //         </div>
        
// //         <div className="space-y-4">
// //           <div className="flex items-center justify-between py-3 border-b border-[#2a3560]">
// //             <span className="text-white text-sm font-medium">Email Notifications</span>
// //             <button className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-medium hover:bg-[#1d4ed8] transition-all">
// //               Enabled
// //             </button>
// //           </div>
          
// //           <div className="flex items-center justify-between py-3 border-b border-[#2a3560]">
// //             <span className="text-white text-sm font-medium">Dark Mode</span>
// //             <button className="px-3 py-1.5 rounded-lg bg-[#1a2340] text-[#94a3b8] text-xs font-medium cursor-not-allowed">
// //               Always On
// //             </button>
// //           </div>
          
// //           <div className="flex items-center justify-between py-3 border-b border-[#2a3560]">
// //             <span className="text-white text-sm font-medium">Sound Effects</span>
// //             <button className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-medium hover:bg-[#1d4ed8] transition-all">
// //               Enabled
// //             </button>
// //           </div>
// //         </div>
        
// //         <button 
// //           onClick={() => setShowSettingsModal(false)}
// //           className="mt-6 w-full py-2.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-all font-medium"
// //         >
// //           Close
// //         </button>
// //       </div>
// //     </div>
// //   );

// //   const handleLogout = () => {
// //     setShowDropdown(false);
// //     toast.success('Logged out successfully', {
// //       duration: 3000,
// //       position: 'bottom-center',
// //       style: {
// //         background: '#162038',
// //         color: '#fff',
// //         border: '1px solid #22c55e',
// //         zIndex: 9999
// //       }
// //     });
// //   };

// //   const handleProfile = () => {
// //     setShowDropdown(false);
// //     setShowProfileModal(true);
// //   };

// //   const handleSettings = () => {
// //     setShowDropdown(false);
// //     setShowSettingsModal(true);
// //   };

// //   const handleMarkAllRead = () => {
// //     setNotifications(prev => prev.map(n => ({ ...n, read: true })));
// //     toast.success('All notifications marked as read', {
// //       duration: 2000,
// //       position: 'bottom-center',
// //       style: { background: '#162038', color: '#fff', border: '1px solid #22c55e', zIndex: 9999 }
// //     });
// //   };

// //   const handleDeleteNotification = (id) => {
// //     setNotifications(prev => prev.filter(n => n.id !== id));
// //     toast.success('Notification deleted', {
// //       duration: 2000,
// //       position: 'bottom-center',
// //       style: { background: '#162038', color: '#fff', border: '1px solid #22c55e', zIndex: 9999 }
// //     });
// //   };

// //   return (
// //     <>
// //       <header className={`sticky top-0 z-50 transition-all duration-300 ${
// //         scrolled ? 'bg-[#0D1730]/95 backdrop-blur-md shadow-lg' : 'bg-[#0D1730] border-b border-[#1e2d4a]'
// //       }`}>
// //         <div className="px-4 sm:px-6 md:px-8">
// //           <div className="flex items-center justify-between h-14 sm:h-16 md:h-16">
// //             {/* Left - Logo Section */}
// //             <div className="flex items-center gap-3">
// //               <button 
// //                 onClick={() => setShowMobileMenu(!showMobileMenu)}
// //                 className="lg:hidden w-9 h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-[#2563EB] transition-all"
// //               >
// //                 <GiHamburgerMenu className="w-4 h-4 text-white" />
// //               </button>
              
// //               <div className="flex items-center gap-2.5 cursor-pointer group">
// //                 <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
// //                   <FaRobot className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
// //                 </div>
// //                 <div className="hidden sm:block">
// //                   <h1 className="text-white font-bold text-sm leading-tight">DevHatch Labs</h1>
// //                   <p className="text-[#94a3b8] text-[10px] leading-tight">AI Customer Support</p>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Center - Title */}
// //             <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
// //               <FaPizzaSlice className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] animate-float" />
// //               <span className="text-white font-bold text-sm sm:text-base md:text-lg">
// //                 <span className="hidden sm:inline">Pizza Palace Assistant</span>
// //                 <span className="sm:hidden">Pizza AI</span>
// //               </span>
// //             </div>

// //             {/* Right - Action Buttons */}
// //             <div className="flex items-center gap-1.5 sm:gap-2">
// //               <button 
// //                 onClick={onDeleteLastMessage}
// //                 className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-yellow-500/20 transition-all group"
// //                 title="Delete last message"
// //               >
// //                 <FaTrashAlt className="w-3.5 h-3.5 text-yellow-400 group-hover:scale-110 transition-transform" />
// //               </button>

// //               <button 
// //                 onClick={onExportChat}
// //                 className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-green-500/20 transition-all group"
// //                 title="Export chat history"
// //               >
// //                 <FaDownload className="w-3.5 h-3.5 text-green-400 group-hover:scale-110 transition-transform" />
// //               </button>

// //               <button 
// //                 onClick={onClearChat}
// //                 className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-red-500/20 transition-all group"
// //                 title="Clear all messages"
// //               >
// //                 <MdClearAll className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
// //               </button>

// //               <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#1a2340]">
// //                 <div className="w-2 h-2 bg-[#34d399] rounded-full animate-pulse"></div>
// //                 <span className="text-[#34d399] text-xs font-medium">Online</span>
// //               </div>
// //               <div className="md:hidden w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse"></div>

// //               {/* Notifications Button */}
// //               <div className="notifications-container relative">
// //                 <button 
// //                   onClick={() => setShowNotifications(!showNotifications)}
// //                   className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-[#2563EB] transition-all"
// //                 >
// //                   <FaBell className="w-3.5 h-3.5 text-[#94a3b8] hover:text-white transition-colors" />
// //                   {unreadCount > 0 && (
// //                     <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center animate-pulse">
// //                       {unreadCount}
// //                     </span>
// //                   )}
// //                 </button>
// //               </div>

// //               {/* User Dropdown - Changed to DevHatch Labs */}
// //               <div className="dropdown-container relative">
// //                 <button 
// //                   onClick={() => setShowDropdown(!showDropdown)}
// //                   className="flex items-center gap-2 px-2 py-1.5 rounded-xl bg-[#1a2340] hover:bg-[#2563EB]/20 transition-all duration-300"
// //                 >
// //                   <FaUserCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
// //                   <span className="text-white text-sm font-medium hidden sm:block">DevHatch</span>
// //                   <FaChevronDown className={`w-2.5 h-2.5 text-[#94a3b8] transition-transform duration-300 hidden sm:block ${showDropdown ? 'rotate-180' : ''}`} />
// //                 </button>
                
// //                 {showDropdown && (
// //                   <div className="absolute right-0 mt-2 w-64 bg-[#162038] border border-[#2a3560] rounded-xl shadow-2xl animate-fadeIn z-60 overflow-hidden">
// //                     <div className="p-4 border-b border-[#2a3560] bg-gradient-to-r from-[#1a2340] to-[#162038]">
// //                       <div className="flex items-center gap-3">
// //                         <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center">
// //                           <FaRobot className="w-5 h-5 text-white" />
// //                         </div>
// //                         <div>
// //                           <p className="text-white font-semibold text-sm">DevHatch Labs</p>
// //                           <p className="text-[#6b7280] text-xs">admin@devhatchlabs.com</p>
// //                         </div>
// //                       </div>
// //                     </div>
                    
// //                     <div className="py-2">
// //                       <button 
// //                         onClick={handleProfile}
// //                         className="w-full px-4 py-2.5 text-sm text-white hover:bg-[#2563EB] transition-colors flex items-center gap-3"
// //                       >
// //                         <FaUser className="w-4 h-4 text-[#2563EB]" />
// //                         <span>Organization Profile</span>
// //                       </button>
                      
// //                       <button 
// //                         onClick={handleSettings}
// //                         className="w-full px-4 py-2.5 text-sm text-white hover:bg-[#2563EB] transition-colors flex items-center gap-3"
// //                       >
// //                         <FaCog className="w-4 h-4 text-[#2563EB]" />
// //                         <span>Settings</span>
// //                       </button>
                      
// //                       <button 
// //                         className="w-full px-4 py-2.5 text-sm text-white hover:bg-[#2563EB] transition-colors flex items-center gap-3"
// //                       >
// //                         <FaHistory className="w-4 h-4 text-[#2563EB]" />
// //                         <span>Chat History</span>
// //                       </button>
                      
// //                       <hr className="border-[#2a3560] my-1" />
                      
// //                       <button 
// //                         onClick={handleLogout}
// //                         className="w-full px-4 py-2.5 text-sm text-red-400 hover:bg-red-400/10 transition-colors flex items-center gap-3"
// //                       >
// //                         <FaSignOutAlt className="w-4 h-4" />
// //                         <span>Logout</span>
// //                       </button>
// //                     </div>
// //                   </div>
// //                 )}
// //               </div>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Mobile Menu */}
// //         {showMobileMenu && (
// //           <div className="lg:hidden bg-[#0D1730] border-t border-[#1e2d4a] p-4 animate-slideInLeft">
// //             <div className="flex items-center gap-3 pb-3 mb-3 border-b border-[#1e2d4a]">
// //               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center">
// //                 <FaRobot className="w-5 h-5 text-white" />
// //               </div>
// //               <div>
// //                 <p className="text-white font-semibold text-sm">DevHatch Labs</p>
// //                 <p className="text-[#6b7280] text-xs">admin@devhatchlabs.com</p>
// //               </div>
// //             </div>
            
// //             <button onClick={onClearChat} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a2340] hover:bg-red-500/10 transition-all mb-2">
// //               <MdClearAll className="w-5 h-5 text-red-400" />
// //               <span className="text-white text-sm">Clear Chat</span>
// //             </button>
            
// //             <button onClick={onExportChat} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a2340] hover:bg-green-500/10 transition-all mb-2">
// //               <FaDownload className="w-5 h-5 text-green-400" />
// //               <span className="text-white text-sm">Export Chat</span>
// //             </button>
            
// //             <button onClick={onDeleteLastMessage} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a2340] hover:bg-yellow-500/10 transition-all mb-2">
// //               <FaTrashAlt className="w-5 h-5 text-yellow-400" />
// //               <span className="text-white text-sm">Undo Last</span>
// //             </button>
            
// //             <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a2340] hover:bg-red-500/10 transition-all">
// //               <FaSignOutAlt className="w-5 h-5 text-red-400" />
// //               <span className="text-white text-sm">Logout</span>
// //             </button>
// //           </div>
// //         )}
// //       </header>

// //       {/* NOTIFICATIONS PANEL - Below navbar (top-14 instead of fixed right) */}
// //       {showNotifications && (
// //         <>
// //           <div 
// //             className="fixed inset-0 z-[65] bg-black/60 backdrop-blur-sm animate-fadeIn" 
// //             onClick={() => setShowNotifications(false)} 
// //           />
// //           <div className="fixed left-1/2 transform -translate-x-1/2 top-14 sm:top-16 mt-2 w-[calc(100%-2rem)] sm:w-96 md:w-[28rem] bg-gradient-to-b from-[#162038] to-[#0D1730] border border-[#2a3560] rounded-2xl shadow-2xl animate-slideInDown z-[70] overflow-hidden">
// //             {/* Header */}
// //             <div className="p-4 border-b border-[#2a3560] bg-gradient-to-r from-[#1a2340] to-[#162038]">
// //               <div className="flex justify-between items-center">
// //                 <div className="flex items-center gap-2">
// //                   <div className="w-8 h-8 rounded-xl bg-[#2563EB]/20 flex items-center justify-center">
// //                     <FaBell className="w-4 h-4 text-[#2563EB] animate-pulse" />
// //                   </div>
// //                   <h3 className="text-white font-bold text-base">Notifications</h3>
// //                   {unreadCount > 0 && (
// //                     <span className="px-2 py-0.5 bg-[#2563EB] text-white text-xs rounded-full animate-pulse">
// //                       {unreadCount} new
// //                     </span>
// //                   )}
// //                 </div>
// //                 {unreadCount > 0 && (
// //                   <button 
// //                     onClick={handleMarkAllRead}
// //                     className="text-[#2563EB] text-xs hover:underline transition-all hover:scale-105"
// //                   >
// //                     Mark all read
// //                   </button>
// //                 )}
// //               </div>
// //             </div>

// //             {/* Notifications List */}
// //             <div className="max-h-96 overflow-y-auto scrollbar-thin">
// //               {notifications.length === 0 ? (
// //                 <div className="p-8 text-center">
// //                   <div className="w-16 h-16 rounded-full bg-[#1a2340] flex items-center justify-center mx-auto mb-3">
// //                     <FaBell className="w-8 h-8 text-[#2a3560]" />
// //                   </div>
// //                   <p className="text-[#94a3b8] text-sm">No notifications</p>
// //                   <p className="text-[#6b7280] text-xs mt-1">You're all caught up!</p>
// //                 </div>
// //               ) : (
// //                 notifications.map((notif, index) => (
// //                   <div 
// //                     key={notif.id}
// //                     className={`relative p-4 border-b border-[#2a3560] transition-all duration-300 hover:bg-[#1a2340]/50 cursor-pointer animate-slideInLeft ${
// //                       !notif.read ? 'bg-[#2563EB]/5 border-l-4 border-l-[#2563EB]' : ''
// //                     }`}
// //                     style={{ animationDelay: `${index * 50}ms` }}
// //                     onClick={() => {
// //                       setNotifications(prev => prev.map(n => 
// //                         n.id === notif.id ? { ...n, read: true } : n
// //                       ));
// //                     }}
// //                   >
// //                     <div className="flex gap-3">
// //                       <div className={`w-10 h-10 rounded-xl ${!notif.read ? 'bg-[#2563EB]/20' : 'bg-[#1a2340]'} flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110`}>
// //                         <notif.icon className={`w-5 h-5 ${notif.color}`} />
// //                       </div>
// //                       <div className="flex-1 min-w-0">
// //                         <div className="flex justify-between items-start gap-2">
// //                           <h4 className={`text-sm font-semibold ${!notif.read ? 'text-white' : 'text-[#94a3b8]'}`}>
// //                             {notif.title}
// //                           </h4>
// //                           <span className="text-[#6b7280] text-[10px] whitespace-nowrap bg-[#1a2340] px-2 py-0.5 rounded-full">
// //                             {notif.time}
// //                           </span>
// //                         </div>
// //                         <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">{notif.message}</p>
// //                       </div>
// //                       <button 
// //                         onClick={(e) => {
// //                           e.stopPropagation();
// //                           handleDeleteNotification(notif.id);
// //                         }}
// //                         className="text-[#4b5563] hover:text-red-400 transition-all hover:scale-110"
// //                       >
// //                         <FaTimes className="w-3 h-3" />
// //                       </button>
// //                     </div>
                    
// //                     {/* Animated unread indicator */}
// //                     {!notif.read && (
// //                       <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
// //                     )}
// //                   </div>
// //                 ))
// //               )}
// //             </div>

// //             {/* Footer */}
// //             {notifications.length > 0 && (
// //               <div className="p-3 border-t border-[#2a3560] bg-[#1a2340]/50">
// //                 <button 
// //                   onClick={() => setShowNotifications(false)}
// //                   className="w-full py-2.5 text-center text-[#2563EB] text-sm font-medium hover:bg-[#2563EB]/10 rounded-xl transition-all duration-300 hover:scale-[0.98]"
// //                 >
// //                   Close
// //                 </button>
// //               </div>
// //             )}
// //           </div>
// //         </>
// //       )}

// //       {/* Profile Modal */}
// //       {showProfileModal && <ProfileModal />}
      
// //       {/* Settings Modal */}
// //       {showSettingsModal && <SettingsModal />}
// //     </>
// //   );
// // }

// // export default Header;

// import React, { useState, useEffect } from 'react';
// import { 
//   FaRobot, FaBell, FaUserCircle, FaChevronDown, FaSignOutAlt,
//   FaPizzaSlice, FaDownload, FaTrashAlt, FaTimes, FaTag,
//   FaTruck, FaInfoCircle, FaUser, FaCog, FaHistory, FaTimesCircle
// } from 'react-icons/fa';
// import { MdOnlinePrediction, MdClearAll } from 'react-icons/md';
// import { GiHamburgerMenu } from 'react-icons/gi';
// import { toast } from 'react-hot-toast';

// function Header({ onClearChat, onExportChat, onDeleteLastMessage }) {
//   const [scrolled, setScrolled] = useState(false);
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const [showNotifications, setShowNotifications] = useState(false);
//   const [showProfileModal, setShowProfileModal] = useState(false);
//   const [showSettingsModal, setShowSettingsModal] = useState(false);
  
//   const [notifications, setNotifications] = useState([
//     { id: 1, title: 'New Pizza Deal!', message: 'Buy 1 Get 1 Free on Large Pizzas', time: '2 min ago', read: false, icon: FaTag, color: 'text-yellow-400' },
//     { id: 2, title: 'Delivery Hours Extended', message: 'Now delivering until 2 AM', time: '1 hour ago', read: false, icon: FaTruck, color: 'text-green-400' },
//     { id: 3, title: 'Server Status', message: 'Backend server is running smoothly', time: '5 min ago', read: false, icon: FaInfoCircle, color: 'text-blue-400' }
//   ]);

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 10);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close dropdowns when clicking outside
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest('.dropdown-container') && !e.target.closest('.notifications-container')) {
//         setShowDropdown(false);
//         setShowNotifications(false);
//       }
//     };
    
//     document.addEventListener('click', handleClickOutside);
//     return () => document.removeEventListener('click', handleClickOutside);
//   }, []);

//   const unreadCount = notifications.filter(n => !n.read).length;

//   // Profile Modal Component - z-index below header
//   const ProfileModal = () => (
//     <div className="fixed inset-0 z-40 flex items-center justify-center p-4 animate-fadeIn">
//       <div 
//         className="absolute inset-0 bg-black/90 backdrop-blur-md" 
//         onClick={() => setShowProfileModal(false)} 
//       />
//       <div className="relative bg-gradient-to-b from-[#162038] to-[#0D1730] border border-[#2a3560] rounded-2xl shadow-2xl max-w-md w-full p-6 animate-slideInLeft z-40">
//         <button 
//           onClick={() => setShowProfileModal(false)}
//           className="absolute top-4 right-4 text-[#94a3b8] hover:text-white transition-colors"
//         >
//           <FaTimesCircle className="w-5 h-5" />
//         </button>
        
//         <div className="flex flex-col items-center text-center">
//           <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center mb-4 shadow-lg">
//             <FaRobot className="w-10 h-10 text-white" />
//           </div>
//           <h2 className="text-white text-xl font-bold mb-1">DevHatch Labs</h2>
//           <p className="text-[#94a3b8] text-sm mb-4">admin@devhatchlabs.com</p>
          
//           <div className="w-full border-t border-[#2a3560] pt-4 mt-2">
//             <div className="space-y-3">
//               <div className="flex justify-between items-center">
//                 <span className="text-[#94a3b8] text-sm">Organization</span>
//                 <span className="text-white text-sm font-medium">DevHatch Labs</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-[#94a3b8] text-sm">Total chats</span>
//                 <span className="text-white text-sm font-medium">1,247 conversations</span>
//               </div>
//               <div className="flex justify-between items-center">
//                 <span className="text-[#94a3b8] text-sm">Status</span>
//                 <span className="text-green-400 text-sm font-medium flex items-center gap-1">
//                   <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
//                   Active
//                 </span>
//               </div>
//             </div>
//           </div>
          
//           <button 
//             onClick={() => setShowProfileModal(false)}
//             className="mt-6 w-full py-2.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-all font-medium"
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     </div>
//   );

//   // Settings Modal Component - z-index below header
//   const SettingsModal = () => (
//     <div className="fixed inset-0 z-40 flex items-center justify-center p-4 animate-fadeIn">
//       <div 
//         className="absolute inset-0 bg-black/90 backdrop-blur-md" 
//         onClick={() => setShowSettingsModal(false)} 
//       />
//       <div className="relative bg-gradient-to-b from-[#162038] to-[#0D1730] border border-[#2a3560] rounded-2xl shadow-2xl max-w-md w-full p-6 animate-slideInRight z-40">
//         <button 
//           onClick={() => setShowSettingsModal(false)}
//           className="absolute top-4 right-4 text-[#94a3b8] hover:text-white transition-colors"
//         >
//           <FaTimesCircle className="w-5 h-5" />
//         </button>
        
//         <div className="flex items-center gap-3 mb-6">
//           <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center">
//             <FaCog className="w-5 h-5 text-white" />
//           </div>
//           <h2 className="text-white text-xl font-bold">Settings</h2>
//         </div>
        
//         <div className="space-y-4">
//           <div className="flex items-center justify-between py-3 border-b border-[#2a3560]">
//             <span className="text-white text-sm font-medium">Email Notifications</span>
//             <button className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-medium hover:bg-[#1d4ed8] transition-all">
//               Enabled
//             </button>
//           </div>
          
//           <div className="flex items-center justify-between py-3 border-b border-[#2a3560]">
//             <span className="text-white text-sm font-medium">Dark Mode</span>
//             <button className="px-3 py-1.5 rounded-lg bg-[#1a2340] text-[#94a3b8] text-xs font-medium cursor-not-allowed">
//               Always On
//             </button>
//           </div>
          
//           <div className="flex items-center justify-between py-3 border-b border-[#2a3560]">
//             <span className="text-white text-sm font-medium">Sound Effects</span>
//             <button className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs font-medium hover:bg-[#1d4ed8] transition-all">
//               Enabled
//             </button>
//           </div>
//         </div>
        
//         <button 
//           onClick={() => setShowSettingsModal(false)}
//           className="mt-6 w-full py-2.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-all font-medium"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );

//   const handleLogout = () => {
//     setShowDropdown(false);
//     toast.success('Logged out successfully', {
//       duration: 3000,
//       position: 'bottom-center',
//       style: {
//         background: '#162038',
//         color: '#fff',
//         border: '1px solid #22c55e',
//         zIndex: 9999
//       }
//     });
//   };

//   const handleProfile = () => {
//     setShowDropdown(false);
//     setShowProfileModal(true);
//   };

//   const handleSettings = () => {
//     setShowDropdown(false);
//     setShowSettingsModal(true);
//   };

//   const handleMarkAllRead = () => {
//     setNotifications(prev => prev.map(n => ({ ...n, read: true })));
//     toast.success('All notifications marked as read', {
//       duration: 2000,
//       position: 'bottom-center',
//       style: { background: '#162038', color: '#fff', border: '1px solid #22c55e', zIndex: 9999 }
//     });
//   };

//   const handleDeleteNotification = (id) => {
//     setNotifications(prev => prev.filter(n => n.id !== id));
//     toast.success('Notification deleted', {
//       duration: 2000,
//       position: 'bottom-center',
//       style: { background: '#162038', color: '#fff', border: '1px solid #22c55e', zIndex: 9999 }
//     });
//   };

//   return (
//     <>
//       {/* Header - HIGHEST Z-INDEX (z-50) */}
//       <header className={`sticky top-0 z-50 transition-all duration-300 ${
//         scrolled ? 'bg-[#0D1730]/95 backdrop-blur-md shadow-lg' : 'bg-[#0D1730] border-b border-[#1e2d4a]'
//       }`}>
//         <div className="px-4 sm:px-6 md:px-8">
//           <div className="flex items-center justify-between h-14 sm:h-16 md:h-16">
//             {/* Left - Logo Section */}
//             <div className="flex items-center gap-3">
//               <button 
//                 onClick={() => setShowMobileMenu(!showMobileMenu)}
//                 className="lg:hidden w-9 h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-[#2563EB] transition-all"
//               >
//                 <GiHamburgerMenu className="w-4 h-4 text-white" />
//               </button>
              
//               <div className="flex items-center gap-2.5 cursor-pointer group">
//                 <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
//                   <FaRobot className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
//                 </div>
//                 <div className="hidden sm:block">
//                   <h1 className="text-white font-bold text-sm leading-tight">DevHatch Labs</h1>
//                   <p className="text-[#94a3b8] text-[10px] leading-tight">AI Customer Support</p>
//                 </div>
//               </div>
//             </div>

//             {/* Center - Title */}
//             <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
//               <FaPizzaSlice className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] animate-float" />
//               <span className="text-white font-bold text-sm sm:text-base md:text-lg">
//                 <span className="hidden sm:inline">Pizza Palace Assistant</span>
//                 <span className="sm:hidden">Pizza AI</span>
//               </span>
//             </div>

//             {/* Right - Action Buttons */}
//             <div className="flex items-center gap-1.5 sm:gap-2">
//               <button 
//                 onClick={onDeleteLastMessage}
//                 className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-yellow-500/20 transition-all group"
//                 title="Delete last message"
//               >
//                 <FaTrashAlt className="w-3.5 h-3.5 text-yellow-400 group-hover:scale-110 transition-transform" />
//               </button>

//               <button 
//                 onClick={onExportChat}
//                 className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-green-500/20 transition-all group"
//                 title="Export chat history"
//               >
//                 <FaDownload className="w-3.5 h-3.5 text-green-400 group-hover:scale-110 transition-transform" />
//               </button>

//               <button 
//                 onClick={onClearChat}
//                 className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-red-500/20 transition-all group"
//                 title="Clear all messages"
//               >
//                 <MdClearAll className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
//               </button>

//               <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#1a2340]">
//                 <div className="w-2 h-2 bg-[#34d399] rounded-full animate-pulse"></div>
//                 <span className="text-[#34d399] text-xs font-medium">Online</span>
//               </div>
//               <div className="md:hidden w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse"></div>

//               {/* Notifications Button */}
//               <div className="notifications-container relative">
//                 <button 
//                   onClick={() => setShowNotifications(!showNotifications)}
//                   className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1a2340} flex items-center justify-center hover:bg-[#2563EB] transition-all"
//                 >
//                   <FaBell className="w-3.5 h-3.5 text-[#94a3b8] hover:text-white transition-colors" />
//                   {unreadCount > 0 && (
//                     <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center animate-pulse">
//                       {unreadCount}
//                     </span>
//                   )}
//                 </button>
//               </div>

//               {/* User Dropdown */}
//               <div className="dropdown-container relative">
//                 <button 
//                   onClick={() => setShowDropdown(!showDropdown)}
//                   className="flex items-center gap-2 px-2 py-1.5 rounded-xl bg-[#1a2340] hover:bg-[#2563EB]/20 transition-all duration-300"
//                 >
//                   <FaUserCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
//                   <span className="text-white text-sm font-medium hidden sm:block">DevHatch</span>
//                   <FaChevronDown className={`w-2.5 h-2.5 text-[#94a3b8] transition-transform duration-300 hidden sm:block ${showDropdown ? 'rotate-180' : ''}`} />
//                 </button>
                
//                 {showDropdown && (
//                   <div className="absolute right-0 mt-2 w-64 bg-[#162038] border border-[#2a3560] rounded-xl shadow-2xl animate-fadeIn z-50 overflow-hidden">
//                     <div className="p-4 border-b border-[#2a3560] bg-gradient-to-r from-[#1a2340] to-[#162038]">
//                       <div className="flex items-center gap-3">
//                         <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center">
//                           <FaRobot className="w-5 h-5 text-white" />
//                         </div>
//                         <div>
//                           <p className="text-white font-semibold text-sm">DevHatch Labs</p>
//                           <p className="text-[#6b7280] text-xs">admin@devhatchlabs.com</p>
//                         </div>
//                       </div>
//                     </div>
                    
//                     <div className="py-2">
//                       <button 
//                         onClick={handleProfile}
//                         className="w-full px-4 py-2.5 text-sm text-white hover:bg-[#2563EB] transition-colors flex items-center gap-3"
//                       >
//                         <FaUser className="w-4 h-4 text-[#2563EB]" />
//                         <span>Organization Profile</span>
//                       </button>
                      
//                       <button 
//                         onClick={handleSettings}
//                         className="w-full px-4 py-2.5 text-sm text-white hover:bg-[#2563EB] transition-colors flex items-center gap-3"
//                       >
//                         <FaCog className="w-4 h-4 text-[#2563EB]" />
//                         <span>Settings</span>
//                       </button>
                      
//                       <button 
//                         className="w-full px-4 py-2.5 text-sm text-white hover:bg-[#2563EB] transition-colors flex items-center gap-3"
//                       >
//                         <FaHistory className="w-4 h-4 text-[#2563EB]" />
//                         <span>Chat History</span>
//                       </button>
                      
//                       <hr className="border-[#2a3560] my-1" />
                      
//                       <button 
//                         onClick={handleLogout}
//                         className="w-full px-4 py-2.5 text-sm text-red-400 hover:bg-red-400/10 transition-colors flex items-center gap-3"
//                       >
//                         <FaSignOutAlt className="w-4 h-4" />
//                         <span>Logout</span>
//                       </button>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {showMobileMenu && (
//           <div className="lg:hidden bg-[#0D1730] border-t border-[#1e2d4a] p-4 animate-slideInLeft">
//             <div className="flex items-center gap-3 pb-3 mb-3 border-b border-[#1e2d4a]">
//               <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center">
//                 <FaRobot className="w-5 h-5 text-white" />
//               </div>
//               <div>
//                 <p className="text-white font-semibold text-sm">DevHatch Labs</p>
//                 <p className="text-[#6b7280] text-xs">admin@devhatchlabs.com</p>
//               </div>
//             </div>
            
//             <button onClick={onClearChat} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a2340] hover:bg-red-500/10 transition-all mb-2">
//               <MdClearAll className="w-5 h-5 text-red-400" />
//               <span className="text-white text-sm">Clear Chat</span>
//             </button>
            
//             <button onClick={onExportChat} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a2340] hover:bg-green-500/10 transition-all mb-2">
//               <FaDownload className="w-5 h-5 text-green-400" />
//               <span className="text-white text-sm">Export Chat</span>
//             </button>
            
//             <button onClick={onDeleteLastMessage} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a2340] hover:bg-yellow-500/10 transition-all mb-2">
//               <FaTrashAlt className="w-5 h-5 text-yellow-400" />
//               <span className="text-white text-sm">Undo Last</span>
//             </button>
            
//             <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a2340] hover:bg-red-500/10 transition-all">
//               <FaSignOutAlt className="w-5 h-5 text-red-400" />
//               <span className="text-white text-sm">Logout</span>
//             </button>
//           </div>
//         )}
//       </header>

//       {/* NOTIFICATIONS PANEL - BELOW NAVBAR with lower z-index (z-40) */}
//       {showNotifications && (
//         <>
//           {/* Backdrop - Only covers content, NOT the header */}
//           <div 
//             className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm animate-fadeIn" 
//             style={{ top: '64px' }}
//             onClick={() => setShowNotifications(false)} 
//           />
          
//           {/* Notifications Panel - Positioned below header */}
//           <div 
//             className="fixed left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] sm:w-96 md:w-[28rem] bg-gradient-to-b from-[#162038] to-[#0D1730] border border-[#2a3560] rounded-2xl shadow-2xl animate-slideInDown z-40 overflow-hidden"
//             style={{ top: '72px' }}
//           >
//             {/* Header */}
//             <div className="p-4 border-b border-[#2a3560] bg-gradient-to-r from-[#1a2340] to-[#162038]">
//               <div className="flex justify-between items-center">
//                 <div className="flex items-center gap-2">
//                   <div className="w-8 h-8 rounded-xl bg-[#2563EB]/20 flex items-center justify-center">
//                     <FaBell className="w-4 h-4 text-[#2563EB] animate-pulse" />
//                   </div>
//                   <h3 className="text-white font-bold text-base">Notifications</h3>
//                   {unreadCount > 0 && (
//                     <span className="px-2 py-0.5 bg-[#2563EB] text-white text-xs rounded-full animate-pulse">
//                       {unreadCount} new
//                     </span>
//                   )}
//                 </div>
//                 {unreadCount > 0 && (
//                   <button 
//                     onClick={handleMarkAllRead}
//                     className="text-[#2563EB] text-xs hover:underline transition-all hover:scale-105"
//                   >
//                     Mark all read
//                   </button>
//                 )}
//               </div>
//             </div>

//             {/* Notifications List */}
//             <div className="max-h-96 overflow-y-auto scrollbar-thin">
//               {notifications.length === 0 ? (
//                 <div className="p-8 text-center">
//                   <div className="w-16 h-16 rounded-full bg-[#1a2340] flex items-center justify-center mx-auto mb-3">
//                     <FaBell className="w-8 h-8 text-[#2a3560]" />
//                   </div>
//                   <p className="text-[#94a3b8] text-sm">No notifications</p>
//                   <p className="text-[#6b7280] text-xs mt-1">You're all caught up!</p>
//                 </div>
//               ) : (
//                 notifications.map((notif, index) => (
//                   <div 
//                     key={notif.id}
//                     className={`relative p-4 border-b border-[#2a3560] transition-all duration-300 hover:bg-[#1a2340]/50 cursor-pointer animate-slideInLeft ${
//                       !notif.read ? 'bg-[#2563EB]/5 border-l-4 border-l-[#2563EB]' : ''
//                     }`}
//                     style={{ animationDelay: `${index * 50}ms` }}
//                     onClick={() => {
//                       setNotifications(prev => prev.map(n => 
//                         n.id === notif.id ? { ...n, read: true } : n
//                       ));
//                     }}
//                   >
//                     <div className="flex gap-3">
//                       <div className={`w-10 h-10 rounded-xl ${!notif.read ? 'bg-[#2563EB]/20' : 'bg-[#1a2340]'} flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110`}>
//                         <notif.icon className={`w-5 h-5 ${notif.color}`} />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <div className="flex justify-between items-start gap-2">
//                           <h4 className={`text-sm font-semibold ${!notif.read ? 'text-white' : 'text-[#94a3b8]'}`}>
//                             {notif.title}
//                           </h4>
//                           <span className="text-[#6b7280] text-[10px] whitespace-nowrap bg-[#1a2340] px-2 py-0.5 rounded-full">
//                             {notif.time}
//                           </span>
//                         </div>
//                         <p className="text-[#94a3b8] text-xs mt-1 leading-relaxed">{notif.message}</p>
//                       </div>
//                       <button 
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           handleDeleteNotification(notif.id);
//                         }}
//                         className="text-[#4b5563] hover:text-red-400 transition-all hover:scale-110"
//                       >
//                         <FaTimes className="w-3 h-3" />
//                       </button>
//                     </div>
                    
//                     {!notif.read && (
//                       <div className="absolute top-1/2 -left-1 transform -translate-y-1/2 w-1.5 h-1.5 bg-[#2563EB] rounded-full animate-pulse" />
//                     )}
//                   </div>
//                 ))
//               )}
//             </div>

//             {/* Footer */}
//             {notifications.length > 0 && (
//               <div className="p-3 border-t border-[#2a3560] bg-[#1a2340]/50">
//                 <button 
//                   onClick={() => setShowNotifications(false)}
//                   className="w-full py-2.5 text-center text-[#2563EB] text-sm font-medium hover:bg-[#2563EB]/10 rounded-xl transition-all duration-300 hover:scale-[0.98]"
//                 >
//                   Close
//                 </button>
//               </div>
//             )}
//           </div>
//         </>
//       )}

//       {/* Profile Modal - z-30 (below header) */}
//       {showProfileModal && <ProfileModal />}
      
//       {/* Settings Modal - z-30 (below header) */}
//       {showSettingsModal && <SettingsModal />}
//     </>
//   );
// }

// export default Header;
import React, { useState, useEffect } from 'react';
import { 
  FaRobot, FaBell, FaUserCircle, FaChevronDown, FaSignOutAlt,
  FaPizzaSlice, FaDownload, FaTrashAlt, FaTimes, FaTag,
  FaTruck, FaInfoCircle, FaUser, FaCog, FaHistory, FaTimesCircle
} from 'react-icons/fa';
import { MdOnlinePrediction, MdClearAll } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { toast } from 'react-hot-toast';

function Header({ onClearChat, onExportChat, onDeleteLastMessage }) {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);
  
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Pizza Deal!', message: 'Buy 1 Get 1 Free on Large Pizzas', time: '2 min ago', read: false, icon: FaTag, color: 'text-yellow-400' },
    { id: 2, title: 'Delivery Hours Extended', message: 'Now delivering until 2 AM', time: '1 hour ago', read: false, icon: FaTruck, color: 'text-green-400' },
    { id: 3, title: 'Server Status', message: 'Backend server is running smoothly', time: '5 min ago', read: false, icon: FaInfoCircle, color: 'text-blue-400' }
  ]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    toast.success('All notifications marked as read');
  };

  const handleDeleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    toast.success('Notification deleted');
  };

  const handleLogout = () => {
    setShowDropdown(false);
    toast.success('Logged out successfully');
  };

  const handleProfile = () => {
    setShowDropdown(false);
    setShowProfileModal(true);
  };

  const handleSettings = () => {
    setShowDropdown(false);
    setShowSettingsModal(true);
  };

  // Profile Modal
  const ProfileModal = () => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowProfileModal(false)} />
      <div className="relative bg-gradient-to-b from-[#162038] to-[#0D1730] border border-[#2a3560] rounded-2xl shadow-2xl max-w-md w-full p-6 animate-slideInLeft">
        <button onClick={() => setShowProfileModal(false)} className="absolute top-4 right-4 text-[#94a3b8] hover:text-white">
          <FaTimesCircle className="w-5 h-5" />
        </button>
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center mb-4">
            <FaRobot className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-white text-xl font-bold mb-1">DevHatch Labs</h2>
          <p className="text-[#94a3b8] text-sm mb-4">admin@devhatchlabs.com</p>
          <div className="w-full border-t border-[#2a3560] pt-4">
            <div className="flex justify-between items-center py-2">
              <span className="text-[#94a3b8] text-sm">Organization</span>
              <span className="text-white text-sm">DevHatch Labs</span>
            </div>
            <div className="flex justify-between items-center py-2">
              <span className="text-[#94a3b8] text-sm">Total chats</span>
              <span className="text-white text-sm">1,247 conversations</span>
            </div>
          </div>
          <button onClick={() => setShowProfileModal(false)} className="mt-6 w-full py-2.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-all">
            Close
          </button>
        </div>
      </div>
    </div>
  );

  // Settings Modal
  const SettingsModal = () => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
      <div className="absolute inset-0 bg-black/90 backdrop-blur-md" onClick={() => setShowSettingsModal(false)} />
      <div className="relative bg-gradient-to-b from-[#162038] to-[#0D1730] border border-[#2a3560] rounded-2xl shadow-2xl max-w-md w-full p-6 animate-slideInRight">
        <button onClick={() => setShowSettingsModal(false)} className="absolute top-4 right-4 text-[#94a3b8] hover:text-white">
          <FaTimesCircle className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center">
            <FaCog className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-white text-xl font-bold">Settings</h2>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-center py-3 border-b border-[#2a3560]">
            <span className="text-white text-sm">Email Notifications</span>
            <button className="px-3 py-1.5 rounded-lg bg-[#2563EB] text-white text-xs">Enabled</button>
          </div>
          <div className="flex justify-between items-center py-3 border-b border-[#2a3560]">
            <span className="text-white text-sm">Dark Mode</span>
            <button className="px-3 py-1.5 rounded-lg bg-[#1a2340] text-[#94a3b8] text-xs">Always On</button>
          </div>
        </div>
        <button onClick={() => setShowSettingsModal(false)} className="mt-6 w-full py-2.5 rounded-xl bg-[#2563EB] text-white hover:bg-[#1d4ed8] transition-all">
          Close
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D1730]/95 backdrop-blur-md shadow-lg' : 'bg-[#0D1730] border-b border-[#1e2d4a]'
      }`}>
        <div className="px-3 sm:px-4 md:px-6">
          <div className="flex items-center justify-between h-14 sm:h-16">
            {/* Left */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button 
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden w-8 h-8 rounded-lg bg-[#1a2340] flex items-center justify-center hover:bg-[#2563EB] transition-all"
              >
                <GiHamburgerMenu className="w-4 h-4 text-white" />
              </button>
              
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center">
                  <FaRobot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-white font-bold text-sm">DevHatch Labs</h1>
                  <p className="text-[#94a3b8] text-[10px]">AI Support</p>
                </div>
              </div>
            </div>

            {/* Center */}
            <div className="flex items-center gap-1 absolute left-1/2 transform -translate-x-1/2">
              <FaPizzaSlice className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#2563EB] animate-float" />
              <span className="text-white font-semibold text-xs sm:text-sm whitespace-nowrap">
                <span className="hidden sm:inline">Pizza Palace Assistant</span>
                <span className="sm:hidden">Pizza AI</span>
              </span>
            </div>

            {/* Right */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              <button onClick={onDeleteLastMessage} className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1a2340] flex items-center justify-center hover:bg-yellow-500/20 transition-all">
                <FaTrashAlt className="w-3 h-3 text-yellow-400" />
              </button>

              <button onClick={onExportChat} className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1a2340] flex items-center justify-center hover:bg-green-500/20 transition-all">
                <FaDownload className="w-3 h-3 text-green-400" />
              </button>

              <button onClick={onClearChat} className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1a2340] flex items-center justify-center hover:bg-red-500/20 transition-all">
                <MdClearAll className="w-3.5 h-3.5 text-red-400" />
              </button>

              <div className="hidden md:flex items-center gap-1 px-2 py-1 rounded-lg bg-[#1a2340]">
                <div className="w-1.5 h-1.5 bg-[#34d399] rounded-full animate-pulse"></div>
                <span className="text-[#34d399] text-[10px]">Online</span>
              </div>

              {/* NOTIFICATION BUTTON */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#1a2340] flex items-center justify-center hover:bg-[#2563EB] transition-all"
                >
                  <FaBell className="w-3 h-3 text-[#94a3b8]" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full text-white text-[8px] flex items-center justify-center">
                      {unreadCount}
                    </span>
                  )}
                </button>
              </div>

              {/* User Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-1 px-1.5 py-1 rounded-lg bg-[#1a2340] hover:bg-[#2563EB]/20 transition-all"
                >
                  <FaUserCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB]" />
                  <span className="text-white text-xs hidden sm:block">DevHatch</span>
                  <FaChevronDown className="w-2 h-2 text-[#94a3b8] hidden sm:block" />
                </button>
                
                {showDropdown && (
                  <div className="absolute right-0 mt-2 w-48 bg-[#162038] border border-[#2a3560] rounded-xl shadow-2xl animate-fadeIn z-50">
                    <div className="p-3 border-b border-[#2a3560]">
                      <p className="text-white font-semibold text-sm">DevHatch Labs</p>
                      <p className="text-[#6b7280] text-xs">admin@devhatchlabs.com</p>
                    </div>
                    <div className="py-1">
                      <button onClick={handleProfile} className="w-full px-3 py-2 text-left text-sm text-white hover:bg-[#2563EB] transition-colors">Profile</button>
                      <button onClick={handleSettings} className="w-full px-3 py-2 text-left text-sm text-white hover:bg-[#2563EB] transition-colors">Settings</button>
                      <hr className="border-[#2a3560] my-1" />
                      <button onClick={handleLogout} className="w-full px-3 py-2 text-left text-sm text-red-400 hover:bg-red-400/10 transition-colors">Logout</button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-[#0D1730] border-t border-[#1e2d4a] p-3 animate-fadeIn">
            <button onClick={onClearChat} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a2340] hover:bg-red-500/10 transition-all mb-2">
              <MdClearAll className="w-4 h-4 text-red-400" /> Clear Chat
            </button>
            <button onClick={onExportChat} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a2340] hover:bg-green-500/10 transition-all mb-2">
              <FaDownload className="w-4 h-4 text-green-400" /> Export Chat
            </button>
            <button onClick={onDeleteLastMessage} className="w-full flex items-center gap-2 px-3 py-2 rounded-lg bg-[#1a2340] hover:bg-yellow-500/10 transition-all">
              <FaTrashAlt className="w-4 h-4 text-yellow-400" /> Undo Last
            </button>
          </div>
        )}
      </header>

      {/* NOTIFICATIONS PANEL - Positioned below navbar */}
      {showNotifications && (
        <div 
          className="fixed left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] sm:w-80 bg-gradient-to-b from-[#162038] to-[#0D1730] border border-[#2a3560] rounded-xl shadow-2xl animate-slideInDown z-40 overflow-hidden"
          style={{ top: '60px' }}
        >
          <div className="p-3 border-b border-[#2a3560] flex justify-between items-center">
            <div className="flex items-center gap-2">
              <FaBell className="w-3.5 h-3.5 text-[#2563EB]" />
              <h3 className="text-white font-semibold text-sm">Notifications</h3>
              {unreadCount > 0 && <span className="px-1.5 py-0.5 bg-[#2563EB] text-white text-[10px] rounded-full">{unreadCount} new</span>}
            </div>
            {unreadCount > 0 && (
              <button onClick={handleMarkAllRead} className="text-[#2563EB] text-[10px] hover:underline">Mark all read</button>
            )}
          </div>
          
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-[#94a3b8] text-sm">No notifications</p>
              </div>
            ) : (
              notifications.map((notif) => (
                <div key={notif.id} className={`p-3 border-b border-[#2a3560] ${!notif.read ? 'bg-[#2563EB]/5' : ''}`}>
                  <div className="flex gap-2">
                    <notif.icon className={`w-4 h-4 ${notif.color}`} />
                    <div className="flex-1">
                      <p className="text-white text-xs font-semibold">{notif.title}</p>
                      <p className="text-[#94a3b8] text-[10px]">{notif.message}</p>
                      <p className="text-[#6b7280] text-[9px] mt-1">{notif.time}</p>
                    </div>
                    <button onClick={() => handleDeleteNotification(notif.id)} className="text-[#4b5563] hover:text-red-400">
                      <FaTimes className="w-2.5 h-2.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          
          <button onClick={() => setShowNotifications(false)} className="w-full py-2 text-center text-[#2563EB] text-xs hover:bg-[#2563EB]/10 transition-all">
            Close
          </button>
        </div>
      )}

      {/* Modals */}
      {showProfileModal && <ProfileModal />}
      {showSettingsModal && <SettingsModal />}
    </>
  );
}

export default Header;