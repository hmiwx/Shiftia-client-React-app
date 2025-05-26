import React from 'react'
import {Link} from 'react-router-dom'
import Typewriter from 'typewriter-effect'

export default function Header() {
  return (
    <section className="text-center mb-16 fade-in">
            <h2 className="text-5xl font-bold text-white mb-4">پلتفرم رزرو خدمات محلی برای کارکنان شیفتی</h2>
            <p className="text-gray-100 mt-4 text-2xl max-w-2xl mx-auto">
            <Typewriter onInit={(tw) => tw.
                    typeString("تعمیرات سریع، رزرو کارواش و آرایشگاه، نظافت محل و...")
                    .start().pauseFor(2000)
                }
                    options={
                        { loop: true }} />
            </p>
            <p className="text-gray-100 mt-4 text-xl max-w-2xl mx-auto">هر خدمتی که نیاز داری، در زمان دلخواهت، با بهترین کیفیت و قیمت مناسب!</p>
            <div className="mt-8 flex gap-4 justify-center">
                <Link to="#mvp-video" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full pulse transition-all shadow-lg">
                    مشاهده ویدیو معرفی
                </Link>
                <Link to="/" className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-full transition-all shadow-lg">
                    ثبت‌نام رایگان
                </Link>
            </div>
        </section>
  )
}
