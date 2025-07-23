"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "About", href: "/" },
  { name: "Commercial", href: "/commercial" },
  { name: "Artwork", href: "/artwork" },
  { name: "AI", href: "/ai" },
  { name: "Lecture", href: "/lecture" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="w-full px-10">
        <div className="relative flex items-center justify-between h-16">
          {/* 왼쪽: 로고 */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-light text-white">
              <img
                src="/tools/logo_250722.png"
                alt="Motion Designer"
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* 가운데: 메뉴 */}
          <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex space-x-10">
            {navItems.map((item) => {
              const isComingSoon = item.name === "AI" || item.name === "Lecture";

              const handleClick = (e) => {
                if (isComingSoon) {
                  e.preventDefault(); // 이동 막기
                  alert("coming soon."); // 팝업 표시
                }
              };

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleClick}
                    className={`text-sm font-medium transition-colors hover:text-white ${
                      pathname === item.href ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
          </div>


          {/* 모바일 햄버거 메뉴 */}
          <div className="ham-btn md:hidden absolute right-0">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-white/10"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 bg-black/80 backdrop-blur-md">
            <div className="py-4 space-y-2">
              {navItems.map((item) => {
                const isComingSoon = item.name === "AI" || item.name === "Lecture";

                const handleClick = (e) => {
                  if (isComingSoon) {
                    e.preventDefault(); // 이동 막기
                    alert("coming soon.");
                  } else {
                    setIsOpen(false); // 정상 메뉴는 메뉴 닫기
                  }
                };

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={handleClick}
                    className={`block px-4 py-2 text-sm font-medium transition-colors hover:bg-white/10 ${
                      pathname === item.href ? "text-white bg-white/10" : "text-gray-300"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

          </div>
        )}
      </div>
    </nav>
  )
}
