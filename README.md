# আমার হিসাব — Offline PWA

বাংলা ভাষার responsive আয়, ব্যয়, পাওনা ও দেনা হিসাব অ্যাপ।

## চালানোর নিয়ম
1. ZIP Extract করে `amar-hisab-pwa` ফোল্ডারটি VS Code-এ খুলুন।
2. Live Server দিয়ে `index.html` চালু করুন (সাধারণত `http://127.0.0.1:5500`)।
3. প্রথমবার পেজ পুরোপুরি লোড হতে দিন। তারপর অফলাইন করে পরীক্ষা করুন।
4. সমর্থিত ব্রাউজারে উপরের ইনস্টল আইকন বা browser menu → Install app / Add to Home screen ব্যবহার করুন।

## ফিচার
- আয়, ব্যয়, পাওনা ও দেনা যোগ করা, সম্পাদনা ও মুছে ফেলা
- আজকের আয়/ব্যয়, মোট আয়/ব্যয় ও বর্তমান ব্যালেন্স
- পাওনা/দেনার জমা বা পরিশোধ এবং বাকি হিসাব
- সার্চ, responsive UI, PWA manifest ও Service Worker cache
- হিসাব এই ডিভাইসের browser `localStorage`-এ থাকে

**সতর্কতা:** browser data clear করলে হিসাব মুছে যেতে পারে। গুরুত্বপূর্ণ হিসাবের backup রাখুন। Service Worker সাধারণত HTTPS বা localhost-এ কাজ করে।
