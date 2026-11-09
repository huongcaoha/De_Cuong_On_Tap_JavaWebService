/* ===================================================================
   JAVA WEB SERVICES & SPRING BOOT 3 - EXAM PREPARATION ENGINE
   Interactive Client-side Engine (Vanilla JS)
   =================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initTabs();
  initCopyButtons();
  initChecklistProgress();
  initSearch();
  initQuickJump();
});

/* -------------------------------------------------------------------
   1. Theme Management (Dark / Light)
   ------------------------------------------------------------------- */
function initTheme() {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const storedTheme = localStorage.getItem('java_ws_guide_theme') || 'dark';

  document.documentElement.setAttribute('data-theme', storedTheme);
  updateThemeIcon(storedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('java_ws_guide_theme', newTheme);
      updateThemeIcon(newTheme);
      showToast(`Đã chuyển sang giao diện ${newTheme === 'dark' ? 'Tối (Cyber Dark)' : 'Sáng (Clean Light)'}`);
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.innerHTML = theme === 'dark' ? '☀️' : '🌙';
    themeToggleBtn.title = theme === 'dark' ? 'Chuyển sang giao diện Sáng' : 'Chuyển sang giao diện Tối';
  }
}

/* -------------------------------------------------------------------
   2. Tab Switching Engine
   ------------------------------------------------------------------- */
function initTabs() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  function activateTab(targetId) {
    tabButtons.forEach(btn => {
      const match = btn.getAttribute('data-target') === targetId;
      btn.classList.toggle('active', match);
    });

    tabContents.forEach(content => {
      const match = content.id === targetId;
      content.classList.toggle('active', match);
    });

    // Save active tab
    localStorage.setItem('java_ws_guide_active_tab', targetId);
    window.location.hash = targetId.replace('tab-', '');
  }

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');
      activateTab(targetId);
    });
  });

  // Handle URL hash or saved tab on initial load
  const hash = window.location.hash.replace('#', '');
  const savedTab = localStorage.getItem('java_ws_guide_active_tab');

  if (hash) {
    const candidateId = 'tab-' + hash;
    if (document.getElementById(candidateId)) {
      activateTab(candidateId);
      return;
    }
  }

  if (savedTab && document.getElementById(savedTab)) {
    activateTab(savedTab);
  }
}

/* -------------------------------------------------------------------
   3. Copy Code to Clipboard with Toast
   ------------------------------------------------------------------- */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.btn-copy');

  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const codeWrapper = btn.closest('.code-wrapper');
      if (!codeWrapper) return;

      const codeElement = codeWrapper.querySelector('pre code, pre');
      if (!codeElement) return;

      let text = codeElement.innerText;

      try {
        await navigator.clipboard.writeText(text);
        const originalText = btn.innerHTML;
        btn.innerHTML = '✔ Đã sao chép';
        btn.style.color = '#10b981';
        showToast('Đã sao chép mã lệnh vào Clipboard!');

        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.style.color = '';
        }, 2200);
      } catch (err) {
        console.error('Failed to copy: ', err);
        showToast('Không thể tự động sao chép. Vui lòng copy thủ công!');
      }
    });
  });
}

function showToast(message) {
  let toast = document.getElementById('global-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'global-toast';
    toast.className = 'toast-notice';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<span>🍃</span> <span>${message}</span>`;
  toast.classList.add('show');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2600);
}

/* -------------------------------------------------------------------
   4. Checklist & Learning Progress Tracker
   ------------------------------------------------------------------- */
function initChecklistProgress() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"][data-task-id]');
  const progressFill = document.getElementById('progress-bar-fill');
  const progressText = document.getElementById('progress-text');
  const progressPercent = document.getElementById('progress-percent');

  const savedProgress = JSON.parse(localStorage.getItem('java_ws_checklist') || '{}');

  checkboxes.forEach(cb => {
    const taskId = cb.getAttribute('data-task-id');
    if (savedProgress[taskId]) {
      cb.checked = true;
    }

    cb.addEventListener('change', () => {
      savedProgress[taskId] = cb.checked;
      localStorage.setItem('java_ws_checklist', JSON.stringify(savedProgress));
      updateProgressDisplay();
      if (cb.checked) {
        showToast('Đã ghi nhận hoàn thành mục kiến thức!');
      }
    });
  });

  function updateProgressDisplay() {
    const total = checkboxes.length;
    if (total === 0) return;

    let completed = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) completed++;
    });

    const percent = Math.round((completed / total) * 100);
    if (progressFill) progressFill.style.width = `${percent}%`;
    if (progressText) progressText.innerText = `${completed}/${total} mục`;
    if (progressPercent) progressPercent.innerText = `${percent}%`;
  }

  updateProgressDisplay();
}


/* -------------------------------------------------------------------
   6. Search Engine Across All Lessons & Labs
   ------------------------------------------------------------------- */
function initSearch() {
  const searchInput = document.getElementById('search-input');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.trim().toLowerCase();
    if (!query) {
      resetSearchResults();
      return;
    }

    const cards = document.querySelectorAll('.lesson-card, .lab-step, .essence-box, .diagram-card');
    let matchCount = 0;

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      const match = text.includes(query);
      if (match) {
        card.style.display = '';
        card.style.border = '2px solid rgba(34, 197, 94, 0.8)';
        card.style.boxShadow = '0 0 16px rgba(34, 197, 94, 0.3)';
        matchCount++;
      } else {
        card.style.border = '';
        card.style.boxShadow = '';
      }
    });
  });
}

function resetSearchResults() {
  const cards = document.querySelectorAll('.lesson-card, .lab-step, .essence-box, .diagram-card');
  cards.forEach(card => {
    card.style.display = '';
    card.style.border = '';
    card.style.boxShadow = '';
  });
}

/* -------------------------------------------------------------------
   7. Quick Jump Links & Auto-switch Tab
   ------------------------------------------------------------------- */
function initQuickJump() {
  const links = document.querySelectorAll('.quick-jump-link');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        const el = document.querySelector(targetId);
        if (el) {
          e.preventDefault();
          
          // If element is inside another tab, ensure tab is active
          const parentTab = el.closest('.tab-content');
          if (parentTab && !parentTab.classList.contains('active')) {
            const tabBtn = document.querySelector(`.tab-btn[data-target="${parentTab.id}"]`);
            if (tabBtn) tabBtn.click();
          }

          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }, 50);
        }
      }
    });
  });
}
