import React from 'react'

export default function Video() {
  return (
    <section id="mvp-video" className="mt-16 card p-8 glass-card fade-in">
            <h3 className="text-3xl font-bold text-blue-900 mb-6 text-center">معرفی شیفتیا</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-2xl">
                <div className="w-full h-0 pb-[56.25%] relative bg-gray-100 rounded-xl">
                    <iframe className="absolute inset-0 w-full h-full rounded-xl" 
                            src="/videos/Shiftia_720p_2br.mp4" 
                            title="معرفی شیفتیا" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                    </iframe>
                    {/* video placeholder
                    <div class="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-800 rounded-xl">
                        <div class="text-center">
                            <i class="fas fa-film text-5xl text-blue-500 mb-4"></i>
                            <p class="text-white text-lg">ویدیو معرفی به زودی...</p>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="mt-6 text-center">
                <p className="text-gray-700">در این ویدیو با امکانات و نحوه استفاده از پلتفرم شیفتیا آشنا شوید.</p>
            </div>
        </section>
  )
}
