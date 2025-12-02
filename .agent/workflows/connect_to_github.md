---
description: Connect local project to GitHub repository
---

1. **GitHub에서 새 저장소 생성**:

   - [GitHub New Repository](https://github.com/new) 페이지로 이동합니다.
   - 저장소 이름(예: `app_lottery`)을 입력하고 'Create repository'를 클릭합니다.
   - **주의**: 'Initialize this repository with a README' 옵션은 **체크 해제**하세요 (이미 로컬에 파일이 있으므로).

2. **원격 저장소 연결** (터미널에서 실행):

   - 생성된 저장소의 URL(예: `https://github.com/username/repo.git`)을 복사합니다.
   - 아래 명령어를 실행합니다 (URL 부분 교체):

   ```powershell
   git remote add origin https://github.com/segi75/lottery
   ```

3. **코드 푸시**:
   ```powershell
   git branch -M main
   git push -u origin main
   ```
