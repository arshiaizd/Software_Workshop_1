# ضمیمهٔ Promptهای هوش مصنوعی

این فایل تاریخچهٔ نگهداری‌شدهٔ promptهای اصلی استفاده‌شده در گفت‌وگوی Codex را ثبت می‌کند. متن‌ها بر اساس promptهای موجود در session فعلی، با حفظ هدف، محدودیت‌ها، branch، commit boundary و checkerها سازمان‌دهی شده‌اند. بخش‌های بسیار تکراریِ منع عملیات مخرب برای خوانایی خلاصه شده‌اند؛ عبارت‌های commit، branch، فایل، نقش اعضا و معیارهای فنی بدون تغییر نگه داشته شده‌اند.

## الگوی ایمنی مشترک

تقریباً در همهٔ promptها این قواعد تکرار شد:

> دو clone `./Arshia` و `./Amin` نمایندهٔ دو دانشجوی متفاوت‌اند و نباید با هم مخلوط شوند. `.git` کپی نشود، هویت و remote تغییر نکند، force-push، rebase، squash، `reset --hard` و `clean -fd` انجام نشود، توسعه مستقیم روی `main` صورت نگیرد و هیچ کار ذخیره‌نشده‌ای حذف نشود. پیش از هر commit مسیر، branch، user.name، user.email و origin بررسی شود.

## ۱. ممیزی اولیه

### Prompt اصلی

> دو clone از `arshiaizd/Software_Workshop_1` در `./Arshia` و `./Amin` را read-only بررسی کن. برای هر clone، `git status`، branch جاری و همهٔ branchها، remote، user.name، user.email، ۱۵ commit آخر و فایل‌ها را گزارش کن. مشخص کن کدام feature commitها از قبل وجود دارند. هیچ edit، commit، push، pull، merge، reset یا delete انجام نده.

### Checker

> CHECKER MODE ONLY. وجود هر دو repository، clean بودن treeها، هویت `arshiaizd` و `MohammadAminKoohi`، aliasهای `github-a` و `github-b`، وجود `main` و سه feature branch و جدا بودن هویت‌ها را با `[YES/NO]` و evidence بررسی کن. هیچ چیز را اصلاح نکن.

## ۲. موتور اصلی وظایف

### Prompt اصلی

> فقط در `./Arshia` و branch `feature/task-engine` کار کن. اگر tree تمیز نیست متوقف شو. `js/task-engine.js` و history را بررسی و قابلیت‌های موجود را تکرار نکن. قابلیت نهایی شامل `TASK_STATUS`، ID یکتا، `createTask()`، state و `getTasks()`/`setTasks()`/`findTaskById()`، CRUD، toggle و validation عنوان/مهلت باشد. commitهای مفقود را با پیام‌های دقیق زیر بساز:
>
> 1. `feat: add application state management`
> 2. `feat: implement task creation and deletion`
> 3. `feat: implement task editing`
> 4. `feat: implement task completion toggle`
> 5. `feat: validate task input`
>
> پیش از هر commit diff و syntax را بررسی و فقط branch feature را push کن.

### Checker

> CHECKER MODE ONLY. branch، identity، origin، clean tree و وجود تمام APIهای TaskEngine، validation عنوان خالی/trim/حداکثر ۱۰۰ نویسه/مهلت نامعتبر، export روی `window.TaskEngine`، syntax و پنج commit دقیق را با ۳۰ بررسی YES/NO کنترل کن. `./Amin` نباید تغییر کرده باشد.

## ۳. ذخیره‌سازی، بازیابی، جست‌وجو، فیلتر و مرتب‌سازی

### Prompt اصلی

> در `./Arshia` چهار commit معنادار بساز. ابتدا `js/storage.js` با کلید `study-task-planner.tasks`، `saveTasks()`، `loadTasks()` و `window.TaskStorage`؛ سپس اتصال restore/save بدون تکرار parsing در TaskEngine؛ سپس `searchTasks(query)` و `filterTasks(status)`؛ و در پایان مرتب‌سازی deadline بدون mutation. پیام‌ها دقیقاً:
>
> - `feat: add localStorage task persistence`
> - `feat: restore persisted task state`
> - `feat: add task search and filtering`
> - `feat: add deadline sorting`

### Checker

> CHECKER MODE ONLY. ۴۶ بررسی YES/NO دربارهٔ storage key، malformed JSON، array validation، save/restore، جست‌وجوی case-insensitive، فیلتر all/pending/completed، sort غیرمخرب، syntax، commitهای جدا و نبود conflict marker اجرا کن. هیچ چیز را fix نکن.

## ۴. اتصال برنامه به مرورگر

### Prompt اصلی

> فقط در `./Arshia` دو commit بساز. commit اول یک `index.html` حداقلی و معنایی با form، title، deadline، error، search، filter، sort، task list، empty state و script order صحیح ایجاد کند. commit دوم `js/app.js` را بسازد و restore، create، render، edit، delete، toggle، persistence، search/filter/sort ترکیبی و empty state را با APIهای موجود متصل کند. پیام‌ها:
>
> - `feat: add task application shell`
> - `feat: connect task engine to browser interface`

### Checker

> CHECKER MODE ONLY. ۷۲ بررسی دربارهٔ HTML hooks، labelها، script order، startup restore، CRUD DOM wiring، persistence، search/filter/sort pipeline، عدم تکرار TaskEngine/Storage، syntax، history و conflict marker اجرا کن.

## ۵. رابط واکنش‌گرا

### Prompt اصلی

> فقط در `./Amin` و `feature/ui-responsive`، مستقل از Arshia، پنج commit بساز: semantic layout، task form/controls، task-card template، desktop CSS، responsive/accessibility CSS. TaskEngine، TaskStorage، CRUD، dashboard و dark theme اضافه نشوند. پیام‌ها:
>
> - `feat: create semantic application layout`
> - `feat: create task form interface`
> - `feat: create task card interface`
> - `style: add desktop application styling`
> - `style: add responsive and accessible interface`

### Checker

> CHECKER MODE ONLY. ۸۴ بررسی دربارهٔ ownership، independence، semantic HTML، فرم و کنترل‌ها، template کارت، desktop CSS، media queryها، focus، accessibility، scope separation، commitهای جدا و remote branch انجام بده.

## ۶. داشبورد و پوسته

### Prompt اصلی

> فقط در `./Amin` و `feature/dashboard-theme`، بدون merge شاخه‌های دیگر، شش commit بساز: dashboard structure، statistics calculations، completion progress، light/dark toggle، theme persistence با کلید جدا و polish. پیام‌ها:
>
> - `feat: create statistics dashboard`
> - `feat: calculate task statistics`
> - `feat: add completion progress indicator`
> - `feat: add dark theme toggle`
> - `feat: persist theme preference`
> - `style: polish dashboard and empty states`

### Checker

> CHECKER MODE ONLY. ۷۳ بررسی دربارهٔ branch independence، dashboard IDs، آمار، zero-task، progress، theme accessibility، storage key جدا، invalid data، responsive polish، scope، syntax و شش commit اجرا کن.

## ۷. ممیزی پیش از merge

### Prompt اصلی

> PRE-MERGE AUDIT MODE. هر دو clone را read-only بررسی کن: repository health، feature branchهای local/remote، count commitهای معنادار نسبت به main، authorship، کیفیت commit، استقلال شاخه‌ها، source sanity و آمادگی ترتیب PRها. حداقل ۲۰ commit معنادار لازم است.

### Checker

> CHECKER MODE ONLY. ۶۰ بررسی مستقل دربارهٔ repository، identity، branch presence، branch independence، ۲۰+ commit، حوزه‌های کاری Arshia/Amin، syntax، secrets و آمادگی PR #1 انجام بده.

## ۸. PR اول

### Prompt اصلی

> با GitHub CLI و بررسی account پیش از هر operation، PR `feature/task-engine → main` را با عنوان `Implement task engine and application logic` به نام Arshia بساز. Amin با متن تعیین‌شده APPROVE کند و Arshia با normal merge commit ادغام کند. feature branch حذف نشود و هر دو clone فقط fetch شوند.

### بررسی پس از PR

> state باید MERGED، reviewer باید `MohammadAminKoohi`، merge method باید merge commit و commitهای feature باید در main قابل مشاهده باشند. هنوز main در شاخهٔ UI merge نشود.

## ۹. Conflict اول

### Prompt اصلی

> در `./Amin` روی `feature/ui-responsive`، `origin/main` را با merge معمولی وارد کن. conflict مصنوعی نساز. در conflict، منطق Arshia و UI واکنش‌گرای Amin را هم‌زمان حفظ کن؛ `index.html` باید hookهای `app.js`، CSS، labelها و script order صحیح داشته باشد. merge commit با پیام `fix: resolve task engine and responsive UI conflict` ساخته و branch push شود.

### Checker

> CHECKER MODE ONLY. ۵۶ بررسی دربارهٔ merge-not-rebase، حفظ TaskEngine/Storage/App، حفظ UI/CSS/accessibility، یکتایی hookها، markerها، syntax، history و remote branch اجرا کن.

## ۱۰. PR دوم

### Prompt اصلی

> PR `feature/ui-responsive → main` را با عنوان `Integrate responsive task planner interface` به نام Amin بساز. Arshia diff و Conflict #1 را بررسی و APPROVE کند؛ Amin با normal merge commit ادغام کند. branch حذف نشود.

### بررسی پس از PR

> author/base/head، approval، merge commit، حفظ commitهای هر دو عضو و Conflict #1 و مستقل ماندن dashboard branch بررسی شود.

## ۱۱. Conflict دوم

### Prompt اصلی

> در `./Amin` روی `feature/dashboard-theme` جدیدترین `origin/main` را merge کن. در conflict، TaskEngine، storage، search/filter/sort، responsive UI و accessibility از main و dashboard/statistics/progress/theme از branch حفظ شوند. HTML نباید duplicate ID داشته باشد؛ dashboard باید با state واقعی به‌روز شود؛ task/theme storage جدا بمانند. merge commit با پیام `fix: resolve dashboard integration conflict` ساخته و push شود.

### Checker/Verification

> markerها، script order، IDها، تمام قابلیت‌های موتور، dashboard، progress و theme، syntax و merge ancestry بررسی شوند. conflict واقعی اثبات‌شده در `index.html` و `css/styles.css` ثبت شود.

## ۱۲. PR سوم

### Prompt اصلی

> PR `feature/dashboard-theme → main` را با عنوان `Integrate dashboard and theme system` به نام Amin بساز. Arshia dashboard، statistics، progress، theme، persistence و Conflict #2 را بررسی و APPROVE کند. Amin با normal merge commit ادغام کند و branch را نگه دارد.

### بررسی پس از PR

> حفظ commitهای Arshia، UI و dashboard، حفظ هر دو conflict merge، وجود feature branch و یکسان شدن `origin/main` در هر دو clone بررسی شود.

## ۱۳. بررسی فنی نهایی

### Prompt اصلی/Checker

> هر دو clone را read-only fetch و audit کن. SHA نهایی، graph، count غیرخالی، author identity، سه remote branch، سه PR/review، evidence دو conflict، final source tree، markerها، JavaScript syntax در صورت وجود Node، ۱۳ قابلیت TaskEngine، browser integration، HTML integrity، responsive/accessibility و dashboard/theme را بررسی کن. برنامهٔ تست دستی ۱۵ مرحله‌ای و گزارش PASS/FAIL ارائه بده؛ هیچ مشکل را fix نکن.

نتیجهٔ ثبت‌شده: SHA نهایی `7b34c0e659cf1d9ecc1887fc59c7e57bb1d410c3`، تعداد ۲۳ commit توسعه‌ای غیرخالی، پنج merge commit، سه PR merged و هر دو conflict حفظ‌شده.

## ۱۴. مستندسازی و استقرار نهایی

### Prompt اصلی

> از `origin/main` شاخهٔ `docs/final-report-pages` بساز. README فارسی کامل، مستند AI، ضمیمهٔ promptها و workflow رسمی GitHub Pages بدون build step تولید کن. مدل ChatGPT را `GPT-5.6 Sol` و مدل Codex را فقط پس از بررسی metadata ثبت کن. دو commit دقیق `docs: add final Persian project report` و `ci: add GitHub Pages deployment workflow` بساز؛ PR نهایی را Arshia ایجاد، Amin approve و Arshia با merge commit ادغام کند. Pages را با `build_type=workflow` تنظیم، deployment را بررسی و فقط URL تأییدشده را به README اضافه کن.

### Checker نهایی

> SHA و فایل‌های final main، فارسی بودن گزارش، تمام بخش‌های الزامی، AI models، لینک appendix، workflow موفق، URL زندهٔ واقعی، clean tree، نبود conflict marker و نبود متن موقت را بررسی و وضعیت submission را گزارش کن.

## یادداشت دربارهٔ حفظ تاریخچه

این ضمیمه برای مستندسازی فرایند و تصمیم‌هاست. متن کامل session ممکن است شامل خروجی‌های طولانی commandها و تکرار دقیق قواعد ایمنی باشد که در اینجا بازنشر نشده‌اند؛ اما همهٔ phaseهای قابل دسترسی، prompt اصلی و checker متناظر آن‌ها در بالا ثبت شده‌اند.
