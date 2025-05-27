import React from 'react'
import {Link} from 'react-router-dom'
import Brand from '../Brand/Brand'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16 py-12">
        <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                <Brand w={10} h={10} fontsize="xl" />
                    <p className="text-gray-400 mt-2">پلتفرم ارائه خدمات محلی برای کارکنان شیفتی</p>
                    <div className="flex gap-8 mt-4">
                        <Link to="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-instagram"></i>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-telegram"></i>
                        </Link>
                        <Link to="#" className="text-gray-400 hover:text-white">
                            <i className="fab fa-twitter"></i>
                        </Link>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-lg font-bold mb-4">دسترسی سریع</h4>
                    <ul className="space-y-2">
                        <li><Link to="/" className="text-gray-400 hover:text-white">صفحه اصلی</Link></li>
                        <li><Link to="#mvp-video" className="text-gray-400 hover:text-white">ویدیو معرفی</Link></li>
                        <li><Link to="/" className="text-gray-400 hover:text-white">درباره ما</Link></li>
                        <li><Link to="/" className="text-gray-400 hover:text-white">تماس با ما</Link></li>
                    </ul>
                </div>
                
                <div>
                    <h4 className="text-lg font-bold mb-4">تماس با ما</h4>
                    <ul className="space-y-4">
                        <li className="flex items-start gap-2">
                            <i className="fas fa-map-marker-alt text-gray-400 mt-1"></i>
                            <span className="text-gray-400">شهرستان جم</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="fas fa-phone text-gray-400 mt-1"></i>
                            <span className="text-gray-400">۰۹۱۷۱۱۱۱۱۱۱</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <i className="fas fa-envelope text-gray-400 mt-1"></i>
                            <span className="text-gray-400">info@shiftiha.ir</span>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>© ۱۴۰۵ شیفتیا. تمامی حقوق محفوظ است.</p>
            </div>
        </div>
    </footer>
  )
}
