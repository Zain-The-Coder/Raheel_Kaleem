import Link from "next/link";
import { profileData } from "@/data";

export function Footer() {
  return (
    <footer className="bg-slate-50 py-12 border-t border-slate-200 mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-lg text-slate-900">{profileData.name}</h3>
          <p className="text-slate-500 text-sm mt-1">Lean Six Sigma Black Belt & Trainer</p>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href={profileData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer" 
            className="text-slate-400 hover:text-blue-600 transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
        &copy; {new Date().getFullYear()} {profileData.name}. All rights reserved.
      </div>
    </footer>
  );
}
