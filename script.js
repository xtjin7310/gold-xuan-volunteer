// ============ 2026 金子萱定制 · 双模块系统 ============
let currentMode = 'parallel';

// ===== MODE SWITCH =====
function switchMode(mode) {
    if (currentMode === mode) return;
    currentMode = mode;

    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('mode-' + mode).classList.add('active');
    document.querySelectorAll('.module-content').forEach(m => m.classList.remove('active'));
    document.getElementById('module-' + mode).classList.add('active');

    if (mode === 'zongping') {
        if (!window._zInit) { buildZTabs(); renderZ(); window._zInit = true; }
        else renderZ();
    } else {
        if (!window._pInit) { pShowTab('all'); window._pInit = true; }
        else pUpdateDisplay();
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== BACK TO TOP =====
document.addEventListener('DOMContentLoaded', () => {
    const btt = document.getElementById('backToTop');
    window.addEventListener('scroll', () => btt.classList.toggle('visible', scrollY > 400));
    // Init parallel by default
    pShowTab('all');
    window._pInit = true;
});

// ==================== PARALLEL MODE ====================
let pData = [...window.universityMajorData], pTab = 'all', pSort = true;

function pShowTab(name) {
    pTab = name;
    document.querySelectorAll('#pTabs .tab-button').forEach(b => {
        b.classList.toggle('active', name === 'all' ? b.textContent.includes('全部') : b.textContent.includes(name.replace('分及以上', '')));
    });
    pData = name === 'all' ? [...window.universityMajorData] : window.universityMajorData.filter(d => d.score_range === name);
    pUpdateDisplay();
}

function pSearch() {
    const t = document.getElementById('pSearch').value.trim().toLowerCase();
    document.querySelector('.search-clear-p').style.display = t ? 'block' : 'none';
    if (!t) { pShowTab(pTab); return; }
    pData = window.universityMajorData.filter(d => d.school.toLowerCase().includes(t) || d.major.toLowerCase().includes(t));
    document.querySelectorAll('#pTabs .tab-button').forEach(b => b.classList.remove('active'));
    pUpdateDisplay();
}
function clearP() { document.getElementById('pSearch').value = ''; document.querySelector('.search-clear-p').style.display = 'none'; pShowTab(pTab); }

function pFilterSchool() {
    const s = document.getElementById('pSchoolFilter').value;
    if (!s) { pShowTab(pTab); return; }
    pData = window.universityMajorData.filter(d => (pTab === 'all' || d.score_range === pTab) && d.school === s);
    pUpdateDisplay();
}

function pQuick(kw) { document.getElementById('pSearch').value = kw; pSearch(); setTimeout(() => document.getElementById('pContent').scrollIntoView({ behavior: 'smooth' }), 100); }
function pToggleSort() { pSort = !pSort; document.getElementById('pSortToggle').textContent = pSort ? '按分数排序' : '按学校排序'; pUpdateDisplay(); }

// Search input listeners
(function() {
    const inp = document.getElementById('pSearch');
    let t; inp.addEventListener('input', () => { clearTimeout(t); t = setTimeout(pSearch, 300); });
    inp.addEventListener('keypress', e => { if (e.key === 'Enter') pSearch(); });
})();

function pUpdateDisplay() {
    const c = document.getElementById('pContent');
    let list = [...pData];
    pSort ? list.sort((a, b) => b.score - a.score) : list.sort((a, b) => a.school.localeCompare(b.school, 'zh') || b.score - a.score);

    if (!list.length) { c.innerHTML = '<div class="empty-state"><p>没有找到匹配的专业</p></div>'; document.getElementById('pResultCount').textContent = '共 0 个专业'; return; }

    let html = '<div class="major-list">';
    list.forEach((d, i) => {
        let rc = 'range-650', tc = 'range-tag-650';
        if (d.score_range === '680分及以上') { rc = 'range-680'; tc = 'range-tag-680'; }
        else if (d.score_range === '670-679分') { rc = 'range-670'; tc = 'range-tag-670'; }
        else if (d.score_range === '660-669分') { rc = 'range-660'; tc = 'range-tag-660'; }

        html += `<div class="major-card ${rc}" onclick="pToggle(${i})">
            <div class="major-header"><h3 class="major-title">${d.major}</h3><div class="major-score">${d.score}</div></div>
            <div class="major-school">${d.school}</div>
            <div class="major-tags"><span class="major-tag ${tc}">${d.score_range}</span></div>
            <button class="toggle-details" id="ptoggle-${i}">查看详情</button>
            <div class="major-details" id="pdetail-${i}" style="display:none">${pDetailHTML(d.details)}</div>
        </div>`;
    });
    html += '</div>';
    c.innerHTML = html;
    document.getElementById('pResultCount').textContent = `共 ${list.length} 个专业`;
}

function pDetailHTML(d) {
    if (!d || !Object.keys(d).length) return '<p style="color:#d6d3d1;font-size:13px">暂无详细资料</p>';
    let h = '';
    if (d['细分子专业']) h += `<div class="detail-item"><span class="detail-label">分流专业</span><span class="detail-content">${d['细分子专业']}</span></div>`;
    if (d['核心课程']) h += `<div class="detail-item"><span class="detail-label">核心课程</span><span class="detail-content">${d['核心课程']}</span></div>`;
    if (d['升学质量']) h += `<div class="detail-item"><span class="detail-label">升学/就业</span><span class="detail-content">${d['升学质量']}</span></div>`;
    if (d['官网链接']) h += `<a class="detail-link" href="${d['官网链接']}" target="_blank">🔗 查看官网介绍 →</a>`;
    return h;
}

function pToggle(i) {
    const el = document.getElementById('pdetail-' + i);
    const btn = document.getElementById('ptoggle-' + i);
    if (!el || !btn) return;
    document.querySelectorAll('.major-details').forEach(x => { if (x !== el) x.style.display = 'none'; });
    document.querySelectorAll('.toggle-details').forEach(b => { if (b !== btn) { b.textContent = '查看详情'; b.classList.remove('expanded'); } });
    if (el.style.display === 'none') { el.style.display = 'block'; btn.textContent = '收起详情'; btn.classList.add('expanded'); }
    else { el.style.display = 'none'; btn.textContent = '查看详情'; btn.classList.remove('expanded'); }
}

// ==================== ZONGPING MODE ====================
const zSchools = window.zongpingData;
const zColors = ['s1', 's2', 's3', 's4', 's5'];
let zFilter = 'all';

function buildZTabs() {
    const c = document.getElementById('zTabs');
    c.innerHTML = '<button class="tab-button active" onclick="zFilterSchool(\'all\')">全部</button>';
    zSchools.forEach(s => { const b = document.createElement('button'); b.className = 'tab-button'; b.textContent = s.short; b.onclick = () => zFilterSchool(s.name); c.appendChild(b); });
}

function zFilterSchool(name) {
    zFilter = name;
    document.querySelectorAll('#zTabs .tab-button').forEach(b => {
        b.classList.toggle('active', name === 'all' ? b.textContent === '全部' : b.textContent === zSchools.find(s => s.name === name)?.short);
    });
    renderZ();
}

function zSearch() {
    const q = document.getElementById('zSearch').value.trim().toLowerCase();
    document.querySelector('.search-clear-z').style.display = q ? 'block' : 'none';
    zFilter = q ? 'search' : 'all';
    if (!q) { document.querySelectorAll('#zTabs .tab-button').forEach(b => b.classList.toggle('active', b.textContent === '全部')); }
    renderZ(q);
}
function clearZ() { document.getElementById('zSearch').value = ''; document.querySelector('.search-clear-z').style.display = 'none'; zFilterSchool('all'); }

(function() {
    const inp = document.getElementById('zSearch');
    let t; inp.addEventListener('input', () => { clearTimeout(t); t = setTimeout(zSearch, 300); });
    inp.addEventListener('keypress', e => { if (e.key === 'Enter') zSearch(); });
})();

function renderZ(query) {
    const c = document.getElementById('zContent');
    let list = [...zSchools];
    if (zFilter !== 'all' && zFilter !== 'search') list = list.filter(s => s.name === zFilter);
    if (query) list = list.filter(s => {
        let t = s.name + s.short; s.majors.forEach(m => m.专业.forEach(p => t += p.name)); s.banxing.forEach(b => t += b.name);
        return t.toLowerCase().includes(query);
    });
    if (!list.length) { c.innerHTML = '<div class="empty-state"><p>没有找到匹配的学校或专业</p></div>'; document.getElementById('zResultCount').textContent = '共 0 所学校'; return; }

    let html = '<div class="school-grid">';
    list.forEach((s, i) => {
        const clr = zColors[i % 5];
        html += `<div class="school-card card-${clr}">
            <div class="school-head" onclick="zToggle('body-${i}', 'ztoggle-${i}')">
                <div class="name">${s.name}<span class="short">${s.short}</span></div>
                <div class="school-meta">
                    <span class="meta-tag tag-${clr}">📋 ${s.plan}</span>
                    <span class="meta-tag tag-${clr}">💰 ${s.tuition}</span>
                    <span class="meta-tag tag-${clr}">📐 ${s.model}</span>
                </div>
                <div class="score-highlight">🎯 2025浙江综评录取分：<strong>${s.score2025}</strong></div>
                <button class="toggle-btn" id="ztoggle-${i}">查看详情</button>
            </div>
            <div class="school-body" id="body-${i}">
                ${zMajorsHTML(s, clr)}
                ${zBanxingHTML(s)}
                ${zScoreHTML(s)}
                <a class="ext-link" href="${s.url}" target="_blank" rel="noopener">🔗 查看官网 →</a>
            </div>
        </div>`;
    });
    html += '</div>';
    c.innerHTML = html;
    document.getElementById('zResultCount').textContent = `共 ${list.length} 所学校`;
}

function zMajorsHTML(s, clr) {
    let h = '<div class="section-title">📚 招生专业</div>';
    if (s.top5 && s.top5.length) h += '<div class="top5-hint">⭐ 标橙色为该校TOP5推荐专业</div>';
    s.majors.forEach(m => {
        h += `<div class="major-group"><div class="group-name">${m.大类}<span class="group-xk">选考：${m.选考}</span></div><div class="major-list-inline">`;
        m.专业.forEach(p => {
            const isTop = s.top5 && s.top5.includes(p.name);
            h += `<span class="major-badge${isTop ? ' top5' : ''}" onclick="event.stopPropagation();showPopup('${p.name}','${s.name}','${(p.detail || '').replace(/'/g, "\\'").replace(/"/g, '&quot;')}','${p.url || ''}')">${isTop ? '⭐ ' : ''}${p.name}</span>`;
        });
        h += '</div></div>';
    });
    return h;
}

function zBanxingHTML(s) {
    if (!s.banxing.length) return '';
    let h = '<div class="section-title">🌟 特色班型 / 培养项目</div><div class="bx-list">';
    s.banxing.forEach(b => {
        h += `<div class="bx-item" onclick="event.stopPropagation();showPopup('${b.name}','','${(b.detail || '').replace(/'/g, "\\'").replace(/"/g, '&quot;')}','${b.url || ''}')">
            <div class="bx-name">🎯 ${b.name}</div><div class="bx-desc">${b.desc || ''}</div><span class="bx-click-hint">点击查看详情 →</span>
        </div>`;
    });
    return h + '</div>';
}

function zScoreHTML(s) {
    return `<div class="section-title">📊 录取分数参考</div>
    <div class="score-card">
        <div class="score-row"><span>2025浙江综评</span><span class="score-val">${s.score2025}</span></div>
        <div class="score-row"><span>参考范围</span><span>${s.score_ref}</span></div>
        ${s.xk ? `<div class="score-row"><span>选考要求</span><span>${s.xk}</span></div>` : ''}
        <div class="score-note">${s.score_note}</div>
    </div>`;
}

function zToggle(bodyId, toggleId) {
    const body = document.getElementById(bodyId);
    const toggle = document.getElementById(toggleId);
    if (!body || !toggle) return;
    document.querySelectorAll('.school-body.open').forEach(b => { if (b.id !== bodyId) b.classList.remove('open'); });
    document.querySelectorAll('.toggle-btn.expanded').forEach(b => { if (b.id !== toggleId) { b.textContent = '查看详情'; b.classList.remove('expanded'); } });
    if (body.classList.contains('open')) { body.classList.remove('open'); toggle.textContent = '查看详情'; toggle.classList.remove('expanded'); }
    else { body.classList.add('open'); toggle.textContent = '收起详情'; toggle.classList.add('expanded'); }
}

// ===== POPUP =====
function showPopup(title, sub, detail, url) {
    const overlay = document.createElement('div'); overlay.className = 'popup-overlay';
    overlay.innerHTML = `<div class="popup-card" onclick="event.stopPropagation()">
        <div class="popup-close" onclick="closePopup()">✕</div>
        <div class="popup-title">${title}</div>
        ${sub ? `<div class="popup-sub">${sub}</div>` : ''}
        <div class="popup-body">${detail || '暂无详细资料'}</div>
        ${url ? `<a class="ext-link" href="${url}" target="_blank">🔗 查看官网介绍 →</a>` : ''}
    </div>`;
    overlay.onclick = closePopup; document.body.appendChild(overlay);
    setTimeout(() => overlay.classList.add('show'), 10);
}

function closePopup() {
    const o = document.querySelector('.popup-overlay');
    if (o) { o.classList.remove('show'); setTimeout(() => o.remove(), 300); }
}
