import React from 'react'
import {Link} from 'react-router-dom'

export default function Reglink() {
  return (
    <section className="mt-16 text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl fade-in">
            <h3 className="text-3xl font-bold text-white mb-4">همین امروز به شیفتی‌ها بپیوندید!</h3>
            <p className="text-white text-lg mb-8 max-w-2xl mx-auto">در صورت مفید دانستن راه اندازی این پلتفرم با وارد کردن اطلاعات خود، ما را همراهی کنید.</p>
            <div className="flex gap-4 justify-center">
                <Link to="/" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all shadow-lg">
                    ثبت‌نام مشتری
                </Link>
                <Link to="/" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-all shadow-lg">
                    ثبت‌نام خدمات دهنده
                </Link>
            </div>
        </section>
  )
}
