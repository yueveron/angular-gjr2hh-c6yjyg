# angular-gjr2hh-c6yjyg

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/angular-gjr2hh-c6yjyg)

---

### 配置步骤
1. tnpm i
2. copy `tsconfig.app.json`
3. 修改端口 ：`"start": "ng serve --port 4201",`

---

### 注意事项

#### 1. - 使用 `<form>` 必须引入 FormsModule

###### app.module.ts
```
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

imports: [
    ReactiveFormsModule,
    FormsModule,
   ],

```