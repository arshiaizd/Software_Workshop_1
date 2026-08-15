# آزمایشگاه مهندسی نرم‌افزار — Study Task Planner

## معرفی پروژه

**Study Task Planner** یک برنامهٔ مدیریت وظایف مبتنی بر مرورگر است که با HTML، CSS و JavaScript خالص ساخته شده است. هدف پروژه، برنامه‌ریزی تکالیف درسی، ثبت مهلت انجام، پیگیری وضعیت کارها و مشاهدهٔ پیشرفت مطالعه در یک رابط ساده و واکنش‌گرا است.

کاربر می‌تواند وظیفه بسازد، آن را ویرایش یا حذف کند، وضعیت آن را بین «در انتظار» و «تکمیل‌شده» تغییر دهد و با جست‌وجو، فیلتر و مرتب‌سازی به وظایف موردنظر برسد. داده‌های وظایف و ترجیح پوسته در `localStorage` نگهداری می‌شوند؛ بنابراین پس از بارگذاری دوبارهٔ صفحه نیز بازیابی می‌شوند. داشبورد برنامه تعداد کل، در انتظار و تکمیل‌شده را همراه با درصد پیشرفت نشان می‌دهد.

## اعضای گروه

| عضو | نام کاربری GitHub | هویت Commit |
|---|---|---|
| Arshia | `arshiaizd` | `arshiaizd <izdyaria@gmail.com>` |
| Amin | `MohammadAminKoohi` | `MohammadAminKoohi <M.amin.koohi@gmail.com>` |

## تقسیم وظایف

### Arshia — شاخهٔ `feature/task-engine`

مسئولیت‌های این شاخه عبارت بودند از:

- مدل دادهٔ وظیفه و تولید شناسهٔ یکتا
- مدیریت state برنامه
- عملیات ایجاد، نمایش، ویرایش و حذف (CRUD)
- تغییر وضعیت تکمیل وظیفه
- اعتبارسنجی عنوان و مهلت
- ذخیره و بازیابی وظایف با `localStorage`
- جست‌وجو، فیلتر وضعیت و مرتب‌سازی بر اساس مهلت
- منطق مرورگر و اتصال `TaskEngine` به رابط کاربری

### Amin — شاخهٔ `feature/ui-responsive`

مسئولیت‌های این شاخه عبارت بودند از:

- ساختار معنایی رابط با HTML
- فرم ایجاد وظیفه و کنترل‌های جست‌وجو، فیلتر و مرتب‌سازی
- ساختار کارت وظیفه
- طراحی دسکتاپ
- طراحی واکنش‌گرا برای موبایل و تبلت
- بهبود دسترس‌پذیری، labelها و حالت‌های `focus-visible`

### Amin — شاخهٔ `feature/dashboard-theme`

مسئولیت‌های این شاخه عبارت بودند از:

- داشبورد آمار
- شمارش کل، در انتظار و تکمیل‌شده
- محاسبه و نمایش درصد پیشرفت
- پوستهٔ روشن و تاریک
- ذخیره و بازیابی ترجیح پوسته
- بهبود ظاهری داشبورد و empty state

Arshia یک شاخهٔ عمیق‌تر از نظر منطق برنامه داشت و Amin دو جریان مستقل رابط، داشبورد و پوسته را توسعه داد. تعداد commitهای واقعی نیز ۱۲ در برابر ۱۱ است؛ در نتیجه مشارکت گروه متعادل باقی ماند.

## مدیریت کار با Kanban

برای مدیریت کارها از GitHub Projects/Kanban استفاده شد. گردش کار برد به شکل زیر بود:

```text
Ready → In Progress → Review → Done
```


## Branchها

- `main`: شاخهٔ محافظت‌شده و محل نسخهٔ یکپارچه و نهایی.
- `feature/task-engine`: توسعهٔ مدل، state، CRUD، اعتبارسنجی، ذخیره‌سازی و منطق مرورگر توسط Arshia.
- `feature/ui-responsive`: توسعهٔ مستقل رابط معنایی، واکنش‌گرا و دسترس‌پذیر توسط Amin.
- `feature/dashboard-theme`: توسعهٔ مستقل داشبورد، پیشرفت و پوسته توسط Amin.

سه شاخهٔ feature حذف نشده‌اند و commitهای آن‌ها از طریق merge commit در تاریخچهٔ `main` قابل مشاهده‌اند.

## تعداد Commitها

| معیار | تعداد |
|---|---:|
| Commitهای توسعه‌ای Arshia | ۱۲ |
| Commitهای توسعه‌ای Amin | ۱۱ |
| مجموع commitهای توسعه‌ای معنادار | ۲۳ |
| Merge commitها | ۵ |
| کل commitهای `main` به‌جز Initial commit | ۲۸ |

عدد ۲۳ فقط commitهای توسعه‌ای غیرخالی را شامل می‌شود. پنج merge commit برای افزایش مصنوعی این عدد شمرده نشده‌اند.

## Pull Requestها و Code Review

### PR #5 — Implement task engine and application logic

- نویسنده: `arshiaizd`
- بازبین: `MohammadAminKoohi`
- مسیر: `feature/task-engine → main`
- merge commit: `b5cb1bae1095735ff1d35b4b7fe4c09290de2461`

### PR #6 — Integrate responsive task planner interface

- نویسنده: `MohammadAminKoohi`
- بازبین: `arshiaizd`
- مسیر: `feature/ui-responsive → main`
- merge commit: `cf951c475c828a5b156782e740cbd87a28d0a92d`

### PR #7 — Integrate dashboard and theme system

- نویسنده: `MohammadAminKoohi`
- بازبین: `arshiaizd`
- مسیر: `feature/dashboard-theme → main`
- merge commit: `7b34c0e659cf1d9ecc1887fc59c7e57bb1d410c3`

هر PR توسط عضو دیگر بررسی و با وضعیت `APPROVED` ثبت شد. برای حفظ commitهای جداگانه و نمایش سهم واقعی اعضا، از merge commit معمولی استفاده شد و هیچ PR با squash یا rebase ادغام نشد.

## Conflict اول

- commit: `c8de473bb92f52b6d51dab664ba30e93d1f3f816`
- پیام: `fix: resolve task engine and responsive UI conflict`
- فایل دارای conflict اثبات‌شده: `index.html`

Arshia و Amin ساختار مرورگر و رابط را به‌صورت مستقل توسعه داده بودند
. پس از ادغام PR موتور وظایف در `main`، جدیدترین `main` در شاخهٔ رابط واکنش‌گرای Amin merge شد.
به دلیل تغییر مستقل `index.html`، Git یک conflict واقعی گزارش کرد.

در حل conflict، ساختار معنایی و واکنش‌گرای Amin به‌عنوان پایهٔ بصری حفظ شد و هم‌زمان IDها، hookها و ترتیب scriptهای موردنیاز `js/app.js` متعلق به کار Arshia باقی ماند. `js/app.js` هنگام یکپارچه‌سازی تنظیم شد، اما تاریخچهٔ Git آن را به‌عنوان فایل conflicted اثبات نمی‌کند. هر دو تاریخچه با یک merge دووالدی حفظ شدند.

## Conflict دوم

- commit: `62bd6b83f30de0099e35ef8df0dd3a1473d5a1c1`
- پیام: `fix: resolve dashboard integration conflict`
- فایل‌های دارای conflict اثبات‌شده:
  - `css/styles.css`
  - `index.html`

در این مرحله `main` از قبل شامل موتور وظایف، ذخیره‌سازی، رابط مرورگر و طراحی واکنش‌گرا بود. شاخهٔ مستقل داشبورد/پوسته نیز HTML و CSS خود را تغییر داده بود؛ بنابراین `index.html` و `css/styles.css` دچار conflict واقعی شدند.

حل نهایی، عملکرد وظایف، طراحی واکنش‌گرا، دسترس‌پذیری، داشبورد آمار، progress و پوستهٔ روشن/تاریک را کنار هم نگه داشت. تاریخچهٔ `main` و شش commit داشبورد نیز با merge دووالدی حفظ شدند.

## امکانات پروژه

- ایجاد، ویرایش و حذف وظیفه
- تغییر وضعیت بین Pending و Completed
- اعتبارسنجی عنوان خالی، فاصله‌های اضافی، حداکثر ۱۰۰ نویسه و مهلت معتبر
- ثبت مهلت انجام
- ذخیره و بازیابی وظایف با `localStorage`
- جست‌وجوی بدون حساسیت به بزرگی و کوچکی حروف
- فیلتر All، Pending و Completed
- مرتب‌سازی زمانی بر اساس deadline
- رابط واکنش‌گرا برای دسکتاپ، تبلت و موبایل
- labelهای متصل، semantic HTML و حالت focus قابل مشاهده
- داشبورد تعداد کل، در انتظار و تکمیل‌شده
- محاسبه و نمایش درصد پیشرفت
- پوستهٔ روشن و تاریک
- ذخیره و بازیابی ترجیح پوسته
- empty state برای نتیجهٔ بدون وظیفه

## ساختار فایل‌ها

```text
.
├── .github/workflows/pages.yml
├── css/styles.css
├── docs/AI_PROMPTS.md
├── js/app.js
├── js/dashboard.js
├── js/storage.js
├── js/task-engine.js
├── index.html
└── README.md
```

- `index.html`: ساختار معنایی برنامه، فرم، فهرست، dashboard و theme toggle.
- `css/styles.css`: طراحی دسکتاپ، واکنش‌گرا، دسترس‌پذیری و متغیرهای پوسته.
- `js/task-engine.js`: مدل، state، CRUD، اعتبارسنجی، جست‌وجو، فیلتر و مرتب‌سازی.
- `js/storage.js`: abstraction ذخیره و بازیابی دادهٔ وظایف.
- `js/dashboard.js`: آمار، progress، پوسته و persistence پوسته.
- `js/app.js`: اتصال DOM به APIهای موتور، storage و dashboard.
- `.github/workflows/pages.yml`: انتشار خودکار سایت استاتیک در GitHub Pages.
- `docs/AI_PROMPTS.md`: تاریخچهٔ نگهداری‌شدهٔ promptهای اصلی و checkerها.
- `README.md`: گزارش نهایی فارسی پروژه.

## نحوهٔ اجرا به‌صورت محلی

پروژه build step و dependency ندارد. می‌توان `index.html` را مستقیماً در مرورگر باز کرد. برای رفتاری نزدیک‌تر به محیط انتشار، استفاده از یک static server ساده پیشنهاد می‌شود؛ برای مثال با Python موجود روی سیستم:

```bash
python -m http.server 8000
```

سپس آدرس `http://localhost:8000` باز شود. نصب Node یا اجرای `npm` لازم نیست.

## تست پروژه

چک‌لیست تست دستی:

1. یک وظیفه با عنوان و deadline معتبر ایجاد شود.
2. عنوان خالی یا فقط شامل فاصله رد شود.
3. عنوان و deadline وظیفه ویرایش شود.
4. وظیفه Complete شود.
5. وظیفه دوباره به Pending برگردد.
6. وظیفه حذف شود.
7. صفحه reload شود و persistence وظایف بررسی شود.
8. جست‌وجو با بخشی از عنوان و حروف متفاوت آزمایش شود.
9. فیلترهای All، Pending و Completed بررسی شوند.
10. چند deadline ساخته و ترتیب زمانی بررسی شود.
11. مقادیر total، pending و completed پس از تغییرات بررسی شوند.
12. درصد progress در حالت صفر، میانی و صددرصد بررسی شود.
13. پوسته میان Light و Dark تغییر کند.
14. صفحه reload و بازیابی پوسته بررسی شود.
15. رابط در عرض دسکتاپ، تبلت و موبایل و با keyboard navigation آزمایش شود.

## GitHub Actions و GitHub Pages

انتشار پروژه با GitHub Actions و workflow فایل `.github/workflows/pages.yml` انجام می‌شود. workflow روی push به `main` و اجرای دستی فعال است، artifact استاتیک ریشهٔ مخزن را بارگذاری می‌کند و از environment رسمی `github-pages` استفاده می‌کند.

نسخهٔ زنده پس از موفقیت workflow و دریافت پاسخ HTTP 200 تأیید شد:

**[https://arshiaizd.github.io/Software_Workshop_1/](https://arshiaizd.github.io/Software_Workshop_1/)**

## استفاده از هوش مصنوعی

هوش مصنوعی در این پروژه نقش دستیار داشت؛ مسئولیت درک کد، بررسی diffها، تأیید commitها و تصمیم نهایی دربارهٔ merge و conflict بر عهدهٔ اعضای گروه باقی ماند.

### ChatGPT

- پلتفرم: OpenAI ChatGPT
- مدل: **GPT-5.6 Sol**
- کاربردها: برنامه‌ریزی پروژه، راهنمایی گردش Git/GitHub، طراحی راهبرد branch و commit، راهنمایی Kanban، تولید promptهای ساختاریافته برای Codex، برنامه‌ریزی merge/conflict، تهیهٔ checklistهای verification و برنامه‌ریزی مستندات.

### OpenAI Codex CLI

- ابزار: OpenAI Codex CLI
- مدل تأییدشده از metadata همین session: **`gpt-5.6-sol`**
- کاربردها: بررسی مخزن، پیاده‌سازی، کنترل status و history، ساخت commitهای کوچک و معنادار، یکپارچه‌سازی conflictها، اجرای گردش PR با `gh` و verification نهایی.

فرایند تعامل چنین بود: ChatGPT promptهای مرحله‌ای و دقیق تولید کرد؛ promptها به Codex داده شدند؛ بعد از هر فاز پیاده‌سازی، یک checker prompt جداگانه و read-only اجرا شد که پاسخ‌های YES/NO و evidence ارائه می‌داد. فقط پس از موفقیت بررسی، کار به مرحلهٔ بعد رفت. این روش احتمال اشتباه در هویت Git، branch، remote و تاریخچه را کاهش داد.

ضمیمهٔ promptهای نگهداری‌شده در [docs/AI_PROMPTS.md](docs/AI_PROMPTS.md) قرار دارد.

## نتیجه‌گیری

این پروژه تمرینی عملی برای تقسیم مسئولیت، توسعهٔ موازی با Git branch، commitهای کوچک، Code Review دوطرفه، Pull Request، حل conflict واقعی، Kanban و deployment خودکار بود. حفظ تاریخچهٔ هر دو عضو در دو conflict و سه PR نشان می‌دهد نسخهٔ نهایی حاصل همکاری قابل ردیابی است. ترکیب منطق برنامه، طراحی واکنش‌گرا، داشبورد، پوسته و GitHub Pages تجربه‌ای نزدیک به یک فرایند واقعی مهندسی نرم‌افزار ایجاد کرد.
