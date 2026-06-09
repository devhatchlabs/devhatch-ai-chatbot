import React, { useState, useEffect } from 'react';
import { 
  FaRobot, FaBell, FaUserCircle, FaChevronDown, FaSignOutAlt,
  FaPizzaSlice, FaDownload, FaTrashAlt, FaTimes, FaTag,
  FaTruck, FaInfoCircle, FaUser, FaCog, FaHistory
} from 'react-icons/fa';
import { MdOnlinePrediction, MdClearAll } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { toast } from 'react-hot-toast';

function Header({ onClearChat, onExportChat, onDeleteLastMessage }) {
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [user, setUser] = useState({
    name: 'Sara Manzoor',
    email: 'sara@devhatch.com',
    avatar: null,
    isLoggedIn: true
  });
  const [notifications, setNotifications] = useState([
    { id: 1, title: 'New Pizza Deal!', message: 'Buy 1 Get 1 Free on Large Pizzas', time: '2 min ago', read: false, icon: FaTag, color: 'text-yellow-400' },
    { id: 2, title: 'Delivery Hours Extended', message: 'Now delivering until 2 AM', time: '1 hour ago', read: false, icon: FaTruck, color: 'text-green-400' }
  ]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const unreadCount = notifications.filter(n => !n.read).length;

  const handleLogout = () => {
    setUser({ ...user, isLoggedIn: false });
    setShowDropdown(false);
    toast.success('Logged out successfully');
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const handleProfile = () => {
    toast.success('Profile page coming soon!');
    setShowDropdown(false);
  };

  const handleSettings = () => {
    toast.success('Settings page coming soon!');
    setShowDropdown(false);
  };

  const handleMarkAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    toast.success('All notifications marked as read');
  };

  const handleDeleteNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    toast.success('Notification deleted');
  };

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0D1730]/95 backdrop-blur-md shadow-lg' : 'bg-[#0D1730] border-b border-[#1e2d4a]'
      }`}>
        <div className="px-4 sm:px-6 md:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-16">
            {/* Left - Logo Section */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="lg:hidden w-9 h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-[#2563EB] transition-all"
              >
                <GiHamburgerMenu className="w-4 h-4 text-white" />
              </button>
              
              <div className="flex items-center gap-2.5 cursor-pointer group">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                  <FaRobot className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-white" />
                </div>
                <div className="hidden sm:block">
                  <h1 className="text-white font-bold text-sm leading-tight">DevHatch Labs</h1>
                  <p className="text-[#94a3b8] text-[10px] leading-tight">AI Customer Support</p>
                </div>
              </div>
            </div>

            {/* Center - Title */}
            <div className="flex items-center gap-2 absolute left-1/2 transform -translate-x-1/2 whitespace-nowrap">
              <FaPizzaSlice className="w-4 h-4 sm:w-5 sm:h-5 text-[#2563EB] animate-float" />
              <span className="text-white font-bold text-sm sm:text-base md:text-lg">
                <span className="hidden sm:inline">Pizza Palace Assistant</span>
                <span className="sm:hidden">Pizza AI</span>
              </span>
            </div>

            {/* Right - Action Buttons */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {/* Undo Button */}
              <button 
                onClick={onDeleteLastMessage}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-yellow-500/20 transition-all group"
                title="Delete last message"
              >
                <FaTrashAlt className="w-3.5 h-3.5 text-yellow-400 group-hover:scale-110 transition-transform" />
              </button>

              {/* Export Button */}
              <button 
                onClick={onExportChat}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-green-500/20 transition-all group"
                title="Export chat history"
              >
                <FaDownload className="w-3.5 h-3.5 text-green-400 group-hover:scale-110 transition-transform" />
              </button>

              {/* Clear Button */}
              <button 
                onClick={onClearChat}
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-red-500/20 transition-all group"
                title="Clear all messages"
              >
                <MdClearAll className="w-4 h-4 text-red-400 group-hover:scale-110 transition-transform" />
              </button>

              {/* Online Status Indicator */}
              <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-[#1a2340]">
                <div className="w-2 h-2 bg-[#34d399] rounded-full animate-pulse"></div>
                <span className="text-[#34d399] text-xs font-medium">Online</span>
              </div>
              <div className="md:hidden w-2.5 h-2.5 rounded-full bg-[#34d399] animate-pulse"></div>

              {/* Notifications */}
              <div className="relative">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#1a2340] flex items-center justify-center hover:bg-[#2563EB] transition-all"
                >
                  <FaBell className="w-3.5 h-3.5 text-[#94a3b8] hover:text-white transition-colors" />
                  {unreadCount > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center animate-pulse">
                      {unreadCount}
                    </span>
                  )}
                </button>
              </div>

              {/* User Profile Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="flex items-center gap-2 px-2 py-1.5 rounded-xl bg-[#1a2340] hover:bg-[#2563EB]/20 transition-all duration-300"
                >
                  <FaUserCircle className="w-5 h-5 sm:w-6 sm:h-6 text-[#2563EB]" />
                  <span className="text-white text-sm font-medium hidden sm:block">Sara</span>
                  <FaChevronDown className={`w-2.5 h-2.5 text-[#94a3b8] transition-transform duration-300 hidden sm:block ${showDropdown ? 'rotate-180' : ''}`} />
                </button>
                
                {/* Dropdown Menu */}
                {showDropdown && (
                  <>
                    <div className="fixed inset-0 z-40" onClick={() => setShowDropdown(false)} />
                    <div className="absolute right-0 mt-2 w-64 bg-[#162038] border border-[#2a3560] rounded-xl shadow-2xl animate-fadeIn z-50 overflow-hidden">
                      {/* User Info */}
                      <div className="p-4 border-b border-[#2a3560] bg-gradient-to-r from-[#1a2340] to-[#162038]">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center">
                            <FaUser className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="text-white font-semibold text-sm">{user.name}</p>
                            <p className="text-[#6b7280] text-xs">{user.email}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Menu Items */}
                      <div className="py-2">
                        <button 
                          onClick={handleProfile}
                          className="w-full px-4 py-2.5 text-sm text-white hover:bg-[#2563EB] transition-colors flex items-center gap-3"
                        >
                          <FaUser className="w-4 h-4 text-[#2563EB]" />
                          <span>My Profile</span>
                        </button>
                        
                        <button 
                          onClick={handleSettings}
                          className="w-full px-4 py-2.5 text-sm text-white hover:bg-[#2563EB] transition-colors flex items-center gap-3"
                        >
                          <FaCog className="w-4 h-4 text-[#2563EB]" />
                          <span>Settings</span>
                        </button>
                        
                        <button 
                          className="w-full px-4 py-2.5 text-sm text-white hover:bg-[#2563EB] transition-colors flex items-center gap-3"
                        >
                          <FaHistory className="w-4 h-4 text-[#2563EB]" />
                          <span>Chat History</span>
                        </button>
                        
                        <hr className="border-[#2a3560] my-1" />
                        
                        <button 
                          onClick={handleLogout}
                          className="w-full px-4 py-2.5 text-sm text-red-400 hover:bg-red-400/10 transition-colors flex items-center gap-3"
                        >
                          <FaSignOutAlt className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="lg:hidden bg-[#0D1730] border-t border-[#1e2d4a] p-4 animate-slideInLeft">
            <div className="flex items-center gap-3 pb-3 mb-3 border-b border-[#1e2d4a]">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563EB] to-[#1d4ed8] flex items-center justify-center">
                <FaUser className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">Sara Manzoor</p>
                <p className="text-[#6b7280] text-xs">sara@devhatch.com</p>
              </div>
            </div>
            
            <button onClick={onClearChat} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a2340] hover:bg-red-500/10 transition-all mb-2">
              <MdClearAll className="w-5 h-5 text-red-400" />
              <span className="text-white text-sm">Clear Chat</span>
            </button>
            
            <button onClick={onExportChat} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a2340] hover:bg-green-500/10 transition-all mb-2">
              <FaDownload className="w-5 h-5 text-green-400" />
              <span className="text-white text-sm">Export Chat</span>
            </button>
            
            <button onClick={onDeleteLastMessage} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a2340] hover:bg-yellow-500/10 transition-all mb-2">
              <FaTrashAlt className="w-5 h-5 text-yellow-400" />
              <span className="text-white text-sm">Undo Last</span>
            </button>
            
            <button onClick={handleLogout} className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-[#1a2340] hover:bg-red-500/10 transition-all">
              <FaSignOutAlt className="w-5 h-5 text-red-400" />
              <span className="text-white text-sm">Logout</span>
            </button>
          </div>
        )}
      </header>

      {/* Notifications Panel */}
      {showNotifications && (
        <>
          <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm animate-fadeIn" onClick={() => setShowNotifications(false)} />
          <div className="fixed right-3 sm:right-4 md:right-6 top-14 sm:top-16 mt-2 w-[calc(100%-1.5rem)] sm:w-80 md:w-96 bg-gradient-to-b from-[#162038] to-[#0D1730] border border-[#2a3560] rounded-2xl shadow-2xl animate-slideInLeft z-50 overflow-hidden">
            {/* Header */}
            <div className="p-4 border-b border-[#2a3560] bg-gradient-to-r from-[#1a2340] to-[#162038]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <FaBell className="w-4 h-4 text-[#2563EB] animate-pulse" />
                  <h3 className="text-white font-bold text-sm">Notifications</h3>
                  {unreadCount > 0 && (
                    <span className="px-2 py-0.5 bg-[#2563EB] text-white text-xs rounded-full">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button 
                    onClick={handleMarkAllRead}
                    className="text-[#2563EB] text-xs hover:underline transition-all"
                  >
                    Mark all read
                  </button>
                )}
              </div>
            </div>

            {/* List */}
            <div className="max-h-96 overflow-y-auto">
              {notifications.length === 0 ? (
                <div className="p-8 text-center">
                  <FaBell className="w-12 h-12 text-[#2a3560] mx-auto mb-3" />
                  <p className="text-[#94a3b8] text-sm">No notifications</p>
                  <p className="text-[#6b7280] text-xs mt-1">You're all caught up!</p>
                </div>
              ) : (
                notifications.map((notif) => (
                  <div 
                    key={notif.id}
                    className={`relative p-4 border-b border-[#2a3560] transition-all hover:bg-[#1a2340]/50 cursor-pointer ${
                      !notif.read ? 'bg-[#2563EB]/5 border-l-2 border-l-[#2563EB]' : ''
                    }`}
                  >
                    <div className="flex gap-3">
                      <div className={`w-10 h-10 rounded-xl ${!notif.read ? 'bg-[#2563EB]/20' : 'bg-[#1a2340]'} flex items-center justify-center flex-shrink-0`}>
                        <notif.icon className={`w-5 h-5 ${notif.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <h4 className={`text-sm font-semibold ${!notif.read ? 'text-white' : 'text-[#94a3b8]'}`}>
                            {notif.title}
                          </h4>
                          <span className="text-[#6b7280] text-xs whitespace-nowrap">{notif.time}</span>
                        </div>
                        <p className="text-[#94a3b8] text-xs mt-1">{notif.message}</p>
                      </div>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteNotification(notif.id);
                        }}
                        className="text-[#4b5563] hover:text-red-400 transition-all"
                      >
                        <FaTimes className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {notifications.length > 0 && (
              <div className="p-3 border-t border-[#2a3560] bg-[#1a2340]/50">
                <button 
                  onClick={() => setShowNotifications(false)}
                  className="w-full py-2 text-center text-[#2563EB] text-sm hover:bg-[#2563EB]/10 rounded-xl transition-all"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}

export default Header;