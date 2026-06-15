document.addEventListener('DOMContentLoaded', () => {
    // Slide Data definitions to dynamically control the right side
    const slideVisuals = {
        1: { img: './Home.jpg', title: 'Dashboard Trang Chủ Natcash' },
        2: { img: './Màn hình khi chưa có sản phẩm.jpg', title: 'Giao diện trống & Nỗi đau điểm bán' },
        3: { img: './Home-1.jpg', title: 'Giải pháp tổng thể 3-trong-1' },
        4: { img: './Đăng ký-4.jpg', title: 'Quy trình eKYC tự phục vụ' },
        5: { img: './Màn hình combo khi add sản phẩm.jpg', title: 'POS & Chọn Combo sản phẩm' },
        6: { img: './tiền mặt.jpg', title: 'Đơn hàng tạm & Tính tiền mặt' },
        7: { img: './Quản lý thiết bị.jpg', title: 'Natcash Speaker nhận thông báo giao dịch' },
        8: { img: './Merchant cá nhân-4.jpg', title: 'Quản lý Sub-Merchant & Phân quyền chuỗi' },
        9: { img: './Phiếu thu chi.jpg', title: 'Sổ quỹ Cash Book & Điểm Loyalty' },
        10: { img: './Successful.jpg', title: 'Thành công & Kế hoạch hành động' }
    };

    let currentSlide = 1;
    const totalSlides = 10;
    let currentMode = 'sim'; // 'img' or 'sim'

    // DOM Elements
    const slides = document.querySelectorAll('.slide');
    const dotsContainer = document.querySelector('.progress-dots');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideNum = document.getElementById('slideNum');
    const modeImgBtn = document.getElementById('modeImg');
    const modeSimBtn = document.getElementById('modeSim');
    const screenshotContainer = document.getElementById('screenshotContainer');
    const simulatorContainer = document.getElementById('simulatorContainer');
    const screenshotImg = document.getElementById('screenshotImg');
    const visualTitle = document.getElementById('visualTitle');
    const phoneScreen = document.getElementById('phoneScreen');

    // Create progress dots dynamically
    for (let i = 1; i <= totalSlides; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === 1 ? 'active' : ''}`;
        dot.addEventListener('click', () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
    const dots = document.querySelectorAll('.dot');

    // Navigation logic
    function updateSlideUI() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        const activeSlide = document.getElementById(`slide-${currentSlide}`);
        if (activeSlide) activeSlide.classList.add('active');
        if (dots[currentSlide - 1]) dots[currentSlide - 1].classList.add('active');
        
        slideNum.textContent = `${currentSlide}/${totalSlides}`;
        
        // Update screenshot image
        const visual = slideVisuals[currentSlide];
        if (visual) {
            screenshotImg.src = visual.img;
            screenshotImg.alt = visual.title;
            visualTitle.textContent = `${visual.title} (${currentMode === 'sim' ? 'Bản mô phỏng' : 'Ảnh thiết kế'})`;
        }

        // Render interactive screen for the simulator based on slide
        renderSimulatorScreen();
    }

    function goToSlide(n) {
        currentSlide = Math.max(1, Math.min(n, totalSlides));
        updateSlideUI();
    }

    prevBtn.addEventListener('click', () => {
        if (currentSlide > 1) {
            currentSlide--;
            updateSlideUI();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentSlide < totalSlides) {
            currentSlide++;
            updateSlideUI();
        }
    });

    // Keyboard support
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            if (currentSlide < totalSlides) {
                currentSlide++;
                updateSlideUI();
            }
        } else if (e.key === 'ArrowLeft') {
            if (currentSlide > 1) {
                currentSlide--;
                updateSlideUI();
            }
        }
    });

    // Mode Toggle
    modeImgBtn.addEventListener('click', () => {
        currentMode = 'img';
        modeImgBtn.classList.add('active');
        modeSimBtn.classList.remove('active');
        screenshotContainer.style.display = 'flex';
        simulatorContainer.style.display = 'none';
        updateSlideUI();
    });

    modeSimBtn.addEventListener('click', () => {
        currentMode = 'sim';
        modeSimBtn.classList.add('active');
        modeImgBtn.classList.remove('active');
        screenshotContainer.style.display = 'none';
        simulatorContainer.style.display = 'flex';
        updateSlideUI();
    });

    // Initialize View
    updateSlideUI();

    // ==========================================
    // INTERACTIVE SIMULATOR SCREENS RENDER LOGIC
    // ==========================================
    
    function renderSimulatorScreen() {
        phoneScreen.innerHTML = ''; // Clear previous screen
        
        switch(currentSlide) {
            case 1:
                renderDashboardScreen();
                break;
            case 2:
                renderEmptyStateScreen();
                break;
            case 3:
                renderAnalyticsScreen();
                break;
            case 4:
                renderOnboardingWizard();
                break;
            case 5:
                renderPOSItemsScreen();
                break;
            case 6:
                renderCheckoutScreen();
                break;
            case 7:
                renderSpeakerTestScreen();
                break;
            case 8:
                renderSubMerchantManager();
                break;
            case 9:
                renderLoyaltyCashBookScreen();
                break;
            case 10:
                renderSuccessRoadmapScreen();
                break;
            default:
                phoneScreen.innerHTML = '<div style="padding:20px; text-align:center;">Màn hình mô phỏng</div>';
        }
    }

    // 1. Dashboard Screen (Welcome)
    function renderDashboardScreen() {
        phoneScreen.innerHTML = `
            <div class="sim-header">
                <span style="font-weight:700; color:var(--primary);">Natcash POS</span>
                <span style="color:var(--success);">● En ligne</span>
            </div>
            <div class="sim-body">
                <div class="sim-card" style="text-align:center; padding:16px; background:linear-gradient(135deg, rgba(245,130,32,0.1), rgba(0,153,68,0.1));">
                    <h4 style="font-size:13px; font-weight:700; margin-bottom:4px;">Bonjour, Quick Coffee!</h4>
                    <p style="font-size:10px; color:var(--text-muted);">Mã Merchant: <b>NAT-9852</b></p>
                </div>
                <div style="display:grid; grid-template-columns:1fr 1fr; gap:8px; margin-bottom:12px;">
                    <div class="sim-card" style="text-align:center; padding:8px; cursor:pointer;" onclick="alert('Đã mở màn hình Bán hàng')">
                        <div style="font-size:18px; margin-bottom:4px;">🛒</div>
                        <div style="font-weight:600; font-size:10px;">Bán hàng POS</div>
                    </div>
                    <div class="sim-card" style="text-align:center; padding:8px; cursor:pointer;">
                        <div style="font-size:18px; margin-bottom:4px;">📊</div>
                        <div style="font-weight:600; font-size:10px;">Báo cáo thu chi</div>
                    </div>
                    <div class="sim-card" style="text-align:center; padding:8px; cursor:pointer;">
                        <div style="font-size:18px; margin-bottom:4px;">🔊</div>
                        <div style="font-weight:600; font-size:10px;">Natcash Speaker</div>
                    </div>
                    <div class="sim-card" style="text-align:center; padding:8px; cursor:pointer;">
                        <div style="font-size:18px; margin-bottom:4px;">⚙️</div>
                        <div style="font-weight:600; font-size:10px;">Tích điểm Loyalty</div>
                    </div>
                </div>
                <div class="sim-card">
                    <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                        <span>Doanh thu hôm nay</span>
                        <span style="color:var(--success); font-weight:700;">+25,500 HTG</span>
                    </div>
                    <div style="font-size:9px; color:var(--text-muted);">Giao dịch cuối cùng: 850 HTG (1 phút trước)</div>
                </div>
            </div>
        `;
    }

    // 2. Empty State Screen (Pain-points)
    function renderEmptyStateScreen() {
        phoneScreen.innerHTML = `
            <div class="sim-header">
                <span style="font-weight:700;">Gestion Stock</span>
                <span>Modifier</span>
            </div>
            <div class="sim-body" style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; height:100%; padding-top:40px;">
                <div style="font-size:48px; margin-bottom:16px; opacity:0.3;">📦</div>
                <h4 style="font-size:13px; font-weight:700; margin-bottom:6px; color:var(--text-muted);">Kho hàng trống!</h4>
                <p style="font-size:10px; color:var(--text-muted); margin-bottom:16px; max-width:180px;">Cửa hàng tại Haiti chưa có danh mục sản phẩm. Vui lòng thêm sản phẩm để tiếp tục.</p>
                <button class="sim-btn" style="width:140px;" onclick="alert('Vui lòng thêm sản phẩm ở các slide tiếp theo!')">+ Thêm sản phẩm</button>
            </div>
        `;
    }

    // 3. Analytics Screen (Solution overview)
    function renderAnalyticsScreen() {
        phoneScreen.innerHTML = `
            <div class="sim-header">
                <span style="font-weight:700;">Rapport Ventes</span>
                <span style="color:var(--secondary);">Filtre</span>
            </div>
            <div class="sim-body">
                <div class="sim-card" style="background:rgba(245,130,32,0.05); border-color:rgba(245,130,32,0.15);">
                    <div style="font-size:9px; text-transform:uppercase; color:var(--text-muted);">Tổng doanh thu tuần</div>
                    <div style="font-size:18px; font-weight:800; color:var(--primary); margin:4px 0;">142,000 HTG</div>
                    <div style="font-size:9px; color:var(--success);">↑ 14% so với tuần trước</div>
                </div>
                <!-- Simulated Chart -->
                <div class="sim-card" style="height:140px; display:flex; align-items:flex-end; justify-content:space-between; padding-top:20px;">
                    <div style="display:flex; flex-direction:column; align-items:center; flex:1;">
                        <div style="width:12px; height:40px; background:rgba(255,255,255,0.1); border-radius:4px 4px 0 0;"></div>
                        <span style="font-size:8px; margin-top:4px;">T2</span>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:center; flex:1;">
                        <div style="width:12px; height:60px; background:rgba(255,255,255,0.1); border-radius:4px 4px 0 0;"></div>
                        <span style="font-size:8px; margin-top:4px;">T3</span>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:center; flex:1;">
                        <div style="width:12px; height:90px; background:var(--secondary); border-radius:4px 4px 0 0; box-shadow:0 0 10px var(--secondary-glow);"></div>
                        <span style="font-size:8px; margin-top:4px; color:var(--secondary);">T4</span>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:center; flex:1;">
                        <div style="width:12px; height:50px; background:rgba(255,255,255,0.1); border-radius:4px 4px 0 0;"></div>
                        <span style="font-size:8px; margin-top:4px;">T5</span>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:center; flex:1;">
                        <div style="width:12px; height:80px; background:var(--primary); border-radius:4px 4px 0 0; box-shadow:0 0 10px var(--primary-glow);"></div>
                        <span style="font-size:8px; margin-top:4px; color:var(--primary);">T6</span>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:center; flex:1;">
                        <div style="width:12px; height:105px; background:var(--success); border-radius:4px 4px 0 0; box-shadow:0 0 10px rgba(0,230,118,0.4);"></div>
                        <span style="font-size:8px; margin-top:4px; color:var(--success);">T7</span>
                    </div>
                    <div style="display:flex; flex-direction:column; align-items:center; flex:1;">
                        <div style="width:12px; height:70px; background:rgba(255,255,255,0.1); border-radius:4px 4px 0 0;"></div>
                        <span style="font-size:8px; margin-top:4px;">CN</span>
                    </div>
                </div>
                
                <h5 style="font-weight:700; margin-bottom:6px; font-size:11px;">Hiệu suất chi nhánh (Haiti)</h5>
                <div class="sim-card" style="padding:8px; font-size:10px;">
                    <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                        <span>Chi nhánh Port-au-Prince</span>
                        <b>85,000 HTG</b>
                    </div>
                    <div style="display:flex; justify-content:space-between;">
                        <span>Chi nhánh Cap-Haïtien</span>
                        <b>57,000 HTG</b>
                    </div>
                </div>
            </div>
        `;
    }

    // 4. Onboarding eKYC Wizard
    let onboardingStep = 1;
    function renderOnboardingWizard() {
        const stepTitles = {
            1: '1. Thông tin Merchant',
            2: '2. Thông tin Người đại diện',
            3: '3. Liên kết Ngân hàng Haiti',
            4: '4. Tải lên ID & Tài liệu pháp lý'
        };

        let formContent = '';
        if (onboardingStep === 1) {
            formContent = `
                <div class="sim-card">
                    <label style="font-size:9px; color:var(--text-muted);">LOẠI MERCHANT</label>
                    <select class="sim-input" style="background:#1a1a24;"><option>Merchant cá nhân nhỏ (Small)</option><option>Doanh nghiệp vừa (Medium)</option></select>
                    
                    <label style="font-size:9px; color:var(--text-muted);">TÊN CỬA HÀNG</label>
                    <input type="text" class="sim-input" placeholder="Ví dụ: Quick Coffee" value="Quick Coffee Shop">
                    
                    <label style="font-size:9px; color:var(--text-muted);">SỐ ĐIỆN THOẠI NATCOM</label>
                    <input type="text" class="sim-input" placeholder="04XXXXXXXX" value="0488776655">
                </div>
            `;
        } else if (onboardingStep === 2) {
            formContent = `
                <div class="sim-card">
                    <label style="font-size:9px; color:var(--text-muted);">HỌ VÀ TÊN NGƯỜI ĐẠI DIỆN</label>
                    <input type="text" class="sim-input" value="Jean Baptiste">
                    
                    <label style="font-size:9px; color:var(--text-muted);">SỐ THẺ QUỐC GIA ID (CIN/NIF)</label>
                    <input type="text" class="sim-input" value="01-01-99-1990-05-00001">
                    
                    <label style="font-size:9px; color:var(--text-muted);">EMAIL</label>
                    <input type="text" class="sim-input" value="jean.baptiste@gmail.com">
                </div>
            `;
        } else if (onboardingStep === 3) {
            formContent = `
                <div class="sim-card">
                    <label style="font-size:9px; color:var(--text-muted);">NGÂN HÀNG LIÊN KẾT TẠI HAITI</label>
                    <select class="sim-input" style="background:#1a1a24;"><option>Sogebank</option><option>Unibank</option><option>BNC (Banque Nationale de Crédit)</option></select>
                    
                    <label style="font-size:9px; color:var(--text-muted);">SỐ TÀI KHOẢN NHẬN TIỀN</label>
                    <input type="text" class="sim-input" value="0152487951336">
                    
                    <label style="font-size:9px; color:var(--text-muted);">MÃ SWIFT</label>
                    <input type="text" class="sim-input" value="SOGEHTPP">
                </div>
            `;
        } else {
            formContent = `
                <div class="sim-card" style="text-align:center; padding:12px;">
                    <div style="font-size:20px; margin-bottom:4px;">🪪</div>
                    <span style="font-size:10px; color:var(--success);">✓ Đã tải ảnh Thẻ CIN/NIF (Mặt trước)</span>
                    <div style="font-size:20px; margin-top:8px; margin-bottom:4px;">📄</div>
                    <span style="font-size:10px; color:var(--success);">✓ Đã tải Giấy phép kinh doanh (Patente)</span>
                </div>
            `;
        }

        phoneScreen.innerHTML = `
            <div class="sim-header">
                <span style="font-weight:700;">Inscription eKYC</span>
                <span style="color:var(--primary); font-size:10px;">${onboardingStep}/4</span>
            </div>
            <div class="sim-body">
                <div class="ekyc-step-indicator">
                    <div class="ekyc-dot ${onboardingStep >= 1 ? 'active' : ''} ${onboardingStep > 1 ? 'completed' : ''}">1</div>
                    <div class="ekyc-dot ${onboardingStep >= 2 ? 'active' : ''} ${onboardingStep > 2 ? 'completed' : ''}">2</div>
                    <div class="ekyc-dot ${onboardingStep >= 3 ? 'active' : ''} ${onboardingStep > 3 ? 'completed' : ''}">3</div>
                    <div class="ekyc-dot ${onboardingStep >= 4 ? 'active' : ''}">4</div>
                </div>
                <h4 style="font-size:12px; font-weight:700; margin-bottom:10px; color:var(--secondary);">${stepTitles[onboardingStep]}</h4>
                ${formContent}
                
                <div style="display:flex; gap:8px; margin-top:16px;">
                    ${onboardingStep > 1 ? `<button class="sim-btn-secondary" style="flex:1; margin-top:0;" id="ekycBackBtn">Quay lại</button>` : ''}
                    <button class="sim-btn" style="flex:2;" id="ekycNextBtn">${onboardingStep < 4 ? 'Tiếp tục' : 'Gửi phê duyệt'}</button>
                </div>
            </div>
        `;

        // Add event listeners inside simulator
        document.getElementById('ekycNextBtn').addEventListener('click', () => {
            if (onboardingStep < 4) {
                onboardingStep++;
                renderOnboardingWizard();
            } else {
                alert('Đã gửi hồ sơ eKYC lên hệ thống! Quick Sale sẽ phê duyệt tự động trong vài giây.');
                onboardingStep = 1;
                renderOnboardingWizard();
            }
        });

        const ekycBackBtn = document.getElementById('ekycBackBtn');
        if (ekycBackBtn) {
            ekycBackBtn.addEventListener('click', () => {
                if (onboardingStep > 1) {
                    onboardingStep--;
                    renderOnboardingWizard();
                }
            });
        }
    }

    // POS Cart State for Slides 5 & 6
    let cart = [];
    const itemsList = [
        { id: 1, name: 'Combo Ăn sáng (Cà phê + Bánh)', price: 850 },
        { id: 2, name: 'Premium Espresso', price: 350 },
        { id: 3, name: 'Burger Bò phô mai', price: 500 },
        { id: 4, name: 'Trà sữa trân châu', price: 400 }
    ];
    let savedDrafts = [];

    // 5. POS Items Screen
    function renderPOSItemsScreen() {
        let cartHtml = cart.map(item => `
            <div class="cart-row">
                <span>${item.name} (x${item.quantity})</span>
                <span>${(item.price * item.quantity).toLocaleString()} HTG</span>
            </div>
        `).join('');

        let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        let discount = 0; // 5% Discount
        if (subtotal > 0) discount = Math.round(subtotal * 0.05);
        let total = subtotal - discount;

        phoneScreen.innerHTML = `
            <div class="sim-header">
                <span style="font-weight:700;">Natcash POS</span>
                <span style="color:var(--secondary); cursor:pointer;" id="clearCartBtn">Xóa giỏ</span>
            </div>
            <div class="sim-body" style="display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <h5 style="font-weight:700; margin-bottom:8px; font-size:10px;">DANH SÁCH MẶT HÀNG</h5>
                    <div class="pos-grid">
                        ${itemsList.map(item => `
                            <div class="pos-item" data-id="${item.id}">
                                <div class="pos-item-title">${item.name}</div>
                                <div class="pos-item-price">${item.price.toLocaleString()} HTG</div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                
                <div>
                    <h5 style="font-weight:700; margin-bottom:6px; font-size:10px;">GIỎ HÀNG</h5>
                    <div class="pos-cart">
                        ${cart.length === 0 ? '<div style="font-size:10px; color:var(--text-muted); text-align:center; padding:10px 0;">Giỏ hàng trống</div>' : cartHtml}
                        ${cart.length > 0 ? `
                            <div class="cart-row cart-total" style="margin-top:6px;">
                                <span>Tạm tính</span>
                                <span>${subtotal.toLocaleString()} HTG</span>
                            </div>
                            <div class="cart-row" style="color:var(--primary);">
                                <span>Chiết khấu (5% Member)</span>
                                <span>-${discount.toLocaleString()} HTG</span>
                            </div>
                            <div class="cart-row cart-total" style="color:var(--secondary); font-size:11px;">
                                <span>TỔNG CỘNG</span>
                                <span>${total.toLocaleString()} HTG</span>
                            </div>
                        ` : ''}
                    </div>
                    
                    <div style="display:flex; gap:6px;">
                        <button class="sim-btn-secondary" style="flex:1; margin-top:0;" id="saveDraftBtn" ${cart.length === 0 ? 'disabled style="opacity:0.5;"' : ''}>Lưu đơn tạm</button>
                        <button class="sim-btn" style="flex:1.5;" id="posCheckoutBtn" ${cart.length === 0 ? 'disabled style="opacity:0.5;"' : ''}>Thanh toán</button>
                    </div>
                </div>
            </div>
        `;

        // Event listeners inside POS
        document.querySelectorAll('.pos-item').forEach(el => {
            el.addEventListener('click', () => {
                const id = parseInt(el.getAttribute('data-id'));
                const item = itemsList.find(i => i.id === id);
                const existing = cart.find(c => c.id === id);
                if (existing) {
                    existing.quantity++;
                } else {
                    cart.push({ ...item, quantity: 1 });
                }
                renderPOSItemsScreen();
            });
        });

        const clearBtn = document.getElementById('clearCartBtn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                cart = [];
                renderPOSItemsScreen();
            });
        }

        const draftBtn = document.getElementById('saveDraftBtn');
        if (draftBtn && cart.length > 0) {
            draftBtn.addEventListener('click', () => {
                savedDrafts.push([...cart]);
                cart = [];
                alert('Đã lưu vào danh sách Đơn Tạm! Bạn có thể lấy lại ở Slide 6.');
                renderPOSItemsScreen();
            });
        }

        const checkoutBtn = document.getElementById('posCheckoutBtn');
        if (checkoutBtn && cart.length > 0) {
            checkoutBtn.addEventListener('click', () => {
                goToSlide(6); // Move to slide 6 (checkout)
            });
        }
    }

    // 6. Checkout Screen (Calculations & Change)
    let amountPaid = 0;
    function renderCheckoutScreen() {
        let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        if (subtotal === 0) {
            // Seed a default cart if empty for presentation purposes
            cart = [{ ...itemsList[0], quantity: 1 }, { ...itemsList[1], quantity: 1 }];
            subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        }
        let discount = Math.round(subtotal * 0.05);
        let total = subtotal - discount;
        let change = amountPaid > total ? amountPaid - total : 0;

        phoneScreen.innerHTML = `
            <div class="sim-header">
                <span style="font-weight:700;">Paiement</span>
                <span style="color:var(--text-muted);" id="backToPos">POS</span>
            </div>
            <div class="sim-body" style="display:flex; flex-direction:column; justify-content:space-between;">
                <div>
                    <!-- Draft restoration section if drafts exist -->
                    ${savedDrafts.length > 0 ? `
                        <div class="sim-card" style="border-color:var(--secondary); padding:8px; display:flex; justify-content:space-between; align-items:center; margin-bottom:10px;">
                            <span style="font-size:9px; color:var(--secondary);">★ Có ${savedDrafts.length} Đơn tạm đang chờ</span>
                            <button style="background:var(--secondary); color:#000; border:none; padding:3px 8px; border-radius:4px; font-size:9px; font-weight:700; cursor:pointer;" id="restoreDraftBtn">Khôi phục</button>
                        </div>
                    ` : ''}

                    <div class="sim-card" style="background:rgba(0,0,0,0.3); text-align:center; padding:12px;">
                        <span style="font-size:10px; color:var(--text-muted);">SỐ TIỀN CẦN THANH TOÁN</span>
                        <h3 style="font-size:20px; font-weight:800; color:var(--secondary); margin-top:4px;">${total.toLocaleString()} HTG</h3>
                    </div>
                    
                    <div style="margin-top:10px;">
                        <span style="font-size:9px; color:var(--text-muted); display:block; margin-bottom:6px;">NHẬP SỐ TIỀN KHÁCH ĐƯA (CASH)</span>
                        <input type="number" class="sim-input" style="font-size:14px; text-align:right; font-weight:bold; padding:8px;" id="cashPaidInput" value="${amountPaid || ''}" placeholder="Nhập số tiền...">
                        
                        <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:6px; margin-bottom:12px;">
                            <button class="sim-btn-secondary" style="margin-top:0; padding:6px; font-size:10px;" onclick="setCash(1000)">1,000 HTG</button>
                            <button class="sim-btn-secondary" style="margin-top:0; padding:6px; font-size:10px;" onclick="setCash(1500)">1,500 HTG</button>
                            <button class="sim-btn-secondary" style="margin-top:0; padding:6px; font-size:10px;" onclick="setCash(2000)">2,000 HTG</button>
                        </div>
                    </div>
                </div>
                
                <div>
                    <div class="sim-card" style="background:rgba(0,230,118,0.05); border-color:rgba(0,230,118,0.2); padding:10px; display:flex; justify-content:space-between; align-items:center;">
                        <span style="font-weight:600; font-size:10px;">TIỀN THỪA THỐI LẠI:</span>
                        <span style="font-size:14px; font-weight:800; color:var(--success);">${change.toLocaleString()} HTG</span>
                    </div>
                    
                    <button class="sim-btn" style="margin-top:8px;" id="completePaymentBtn" ${amountPaid < total ? 'disabled style="opacity:0.5;"' : ''}>Hoàn thành & In hóa đơn</button>
                </div>
            </div>
        `;

        // Expose function globally for click handlers inside template
        window.setCash = function(amt) {
            amountPaid = amt;
            renderCheckoutScreen();
        };

        const restoreBtn = document.getElementById('restoreDraftBtn');
        if (restoreBtn) {
            restoreBtn.addEventListener('click', () => {
                cart = savedDrafts.pop();
                amountPaid = 0;
                renderCheckoutScreen();
            });
        }

        const cashInput = document.getElementById('cashPaidInput');
        if (cashInput) {
            cashInput.addEventListener('input', (e) => {
                amountPaid = parseFloat(e.target.value) || 0;
                let subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                let discount = Math.round(subtotal * 0.05);
                let total = subtotal - discount;
                let change = amountPaid > total ? amountPaid - total : 0;
                
                const completeBtn = document.getElementById('completePaymentBtn');
                if (amountPaid >= total) {
                    completeBtn.disabled = false;
                    completeBtn.style.opacity = 1;
                } else {
                    completeBtn.disabled = true;
                    completeBtn.style.opacity = 0.5;
                }
            });
        }

        const completeBtn = document.getElementById('completePaymentBtn');
        if (completeBtn) {
            completeBtn.addEventListener('click', () => {
                alert('Thanh toán thành công! Sổ quỹ cửa hàng đã tự động ghi nhận phiếu thu.');
                cart = [];
                amountPaid = 0;
                goToSlide(7); // Go to Speaker slide next
            });
        }

        const backBtn = document.getElementById('backToPos');
        if (backBtn) {
            backBtn.addEventListener('click', () => {
                goToSlide(5);
            });
        }
    }

    // 7. IoT Speaker Screen
    function renderSpeakerTestScreen() {
        phoneScreen.innerHTML = `
            <div class="sim-header">
                <span style="font-weight:700;">Haut-parleur Natcash</span>
                <span style="color:var(--success);">Connecté</span>
            </div>
            <div class="sim-body" style="display:flex; flex-direction:column; align-items:center; justify-content:center;">
                <div class="speaker-sim-wrapper">
                    <!-- LED Light and Wave visualizer -->
                    <div class="iot-speaker">
                        <div class="speaker-grill"></div>
                        <div style="display:flex; justify-content:space-between; width:100%; align-items:center;">
                            <span style="font-size:8px; color:var(--text-muted);">Natcash</span>
                            <div class="speaker-led" id="speakerLed"></div>
                        </div>
                    </div>
                    
                    <div class="audio-waves" id="audioWaves">
                        <div class="wave-bar"></div>
                        <div class="wave-bar"></div>
                        <div class="wave-bar"></div>
                        <div class="wave-bar"></div>
                        <div class="wave-bar"></div>
                    </div>

                    <div class="voice-bubble" id="voiceBubble" style="font-size: 11px;">
                        "Natcash resevwa mil senksan goud"
                    </div>

                    <button class="sim-btn" id="simulatePaymentBtn">Kiểm thử giao dịch: 1,500 HTG</button>
                </div>
            </div>
        `;

        const simBtn = document.getElementById('simulatePaymentBtn');
        const led = document.getElementById('speakerLed');
        const waves = document.getElementById('audioWaves');
        const bubble = document.getElementById('voiceBubble');

        simBtn.addEventListener('click', () => {
            // Trigger visual simulator
            led.classList.add('active');
            waves.classList.add('active');
            bubble.classList.add('active');
            simBtn.disabled = true;
            simBtn.style.opacity = 0.5;

            // Voice simulation using French/Creole accent in Speech Synthesis
            if ('speechSynthesis' in window) {
                // Approximate Creole audio using French voice or phonetic text
                const utterance = new SpeechSynthesisUtterance('Natcash resevwa mille cinq cents gourdes');
                utterance.lang = 'fr-FR';
                utterance.rate = 0.95;
                window.speechSynthesis.speak(utterance);
            }

            setTimeout(() => {
                led.classList.remove('active');
                waves.classList.remove('active');
                bubble.classList.remove('active');
                simBtn.disabled = false;
                simBtn.style.opacity = 1;
            }, 3000);
        });
    }

    // 8. Sub-Merchant & Category Manager
    function renderSubMerchantManager() {
        phoneScreen.innerHTML = `
            <div class="sim-header">
                <span style="font-weight:700;">Multi-Boutique</span>
                <span style="color:var(--secondary);">+ Succursale</span>
            </div>
            <div class="sim-body">
                <div class="sim-card" style="padding:10px;">
                    <div style="font-weight:700; font-size:11px; margin-bottom:8px; color:var(--secondary);">SUCCURSALES (HAITI)</div>
                    <div style="border-bottom:1px solid rgba(255,255,255,0.06); padding-bottom:8px; margin-bottom:8px;">
                        <div style="display:flex; justify-content:space-between; font-weight:600;">
                            <span>Chi nhánh Delmas (Admin)</span>
                            <span style="color:var(--success);">Actif</span>
                        </div>
                        <span style="font-size:9px; color:var(--text-muted);">Boulevard de Delmas, Port-au-Prince</span>
                    </div>
                    <div>
                        <div style="display:flex; justify-content:space-between; font-weight:600;">
                            <span>Chi nhánh Cap-Haïtien</span>
                            <span style="color:var(--success);">Actif</span>
                        </div>
                        <span style="font-size:9px; color:var(--text-muted);">Rue 22-A, Cap-Haïtien</span>
                    </div>
                </div>

                <div class="sim-card" style="padding:10px;">
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
                        <span style="font-weight:700; font-size:11px; color:var(--primary);">DANH MỤC SẢN PHẨM (8/20)</span>
                        <span style="font-size:8px; color:var(--text-muted);">Giới hạn 20</span>
                    </div>
                    <div style="display:flex; flex-wrap:wrap; gap:6px;">
                        <span style="background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:12px; font-size:9px;">☕ Cà phê</span>
                        <span style="background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:12px; font-size:9px;">🍔 Đồ ăn nhanh</span>
                        <span style="background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:12px; font-size:9px;">🍰 Bánh ngọt</span>
                        <span style="background:rgba(255,255,255,0.05); padding:4px 8px; border-radius:12px; font-size:9px;">🍹 Nước giải khát</span>
                    </div>
                </div>
            </div>
        `;
    }

    // 9. Loyalty & Cash Book Screen
    let loyaltyAmount = 5000;
    let expenses = [
        { desc: 'Hóa đơn tiền điện Delmas', amount: 8500 },
        { desc: 'Nhập hạt cà phê Arabica', amount: 12000 }
    ];

    function renderLoyaltyCashBookScreen() {
        let loyaltyPoints = Math.floor(loyaltyAmount / 100); // 100 HTG = 1 MP
        let cashback = loyaltyPoints * 1; // 1 HTG per point

        phoneScreen.innerHTML = `
            <div class="sim-header">
                <span style="font-weight:700;">Finances & Fidélité</span>
            </div>
            <div class="sim-body" style="display:flex; flex-direction:column; justify-content:space-between; height:100%;">
                <div>
                    <!-- Loyalty calculator -->
                    <div class="sim-card" style="padding:10px; border-color:var(--secondary);">
                        <div style="font-weight:700; font-size:11px; margin-bottom:8px; color:var(--secondary);">TÍCH ĐIỂM LOYALTY NATCASH</div>
                        <label style="font-size:8px; color:var(--text-muted);">GIÁ TRỊ GIAO DỊCH (HTG)</label>
                        <input type="number" class="sim-input" id="loyaltyAmountInput" value="${loyaltyAmount}">
                        <div style="display:flex; justify-content:space-between; font-size:10px; margin-top:6px;">
                            <span>Điểm tích lũy (100 HTG = 1 MP):</span>
                            <b style="color:var(--success);">${loyaltyPoints} MP</b>
                        </div>
                        <div style="display:flex; justify-content:space-between; font-size:10px; margin-top:4px;">
                            <span>Quy đổi hoàn tiền (50 MP = 50 HTG):</span>
                            <b style="color:var(--warning);">${cashback.toLocaleString()} HTG</b>
                        </div>
                    </div>

                    <!-- Cash book expense logger -->
                    <div class="sim-card" style="padding:10px; margin-top:10px;">
                        <div style="font-weight:700; font-size:11px; margin-bottom:8px; color:var(--primary);">SỔ QUỸ: THÊM PHIẾU CHI</div>
                        <input type="text" class="sim-input" placeholder="Mục đích chi (ví dụ: Mua đá lạnh)" id="expDescInput">
                        <input type="number" class="sim-input" placeholder="Số tiền chi (HTG)" id="expAmountInput">
                        <button class="sim-btn" style="padding:6px; font-size:10px;" id="addExpenseBtn">Ghi nhận phiếu chi</button>
                    </div>
                </div>

                <div class="sim-card" style="padding:8px; margin-bottom:0;">
                    <div style="font-size:9px; font-weight:700; color:var(--text-muted); margin-bottom:6px;">PHIẾU CHI GẦN ĐÂY</div>
                    ${expenses.map(e => `
                        <div style="display:flex; justify-content:space-between; font-size:9px; margin-bottom:4px;">
                            <span style="text-overflow:ellipsis; overflow:hidden; white-space:nowrap; max-width:140px;">• ${e.desc}</span>
                            <span style="color:var(--primary); font-weight:bold;">-${e.amount.toLocaleString()} HTG</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        const loyaltyInput = document.getElementById('loyaltyAmountInput');
        if (loyaltyInput) {
            loyaltyInput.addEventListener('input', (e) => {
                loyaltyAmount = parseFloat(e.target.value) || 0;
                renderLoyaltyCashBookScreen();
            });
        }

        const addExpenseBtn = document.getElementById('addExpenseBtn');
        if (addExpenseBtn) {
            addExpenseBtn.addEventListener('click', () => {
                const desc = document.getElementById('expDescInput').value;
                const amt = parseFloat(document.getElementById('expAmountInput').value);
                if (desc && amt > 0) {
                    expenses.unshift({ desc, amount: amt });
                    alert('Đã ghi nhận phiếu chi thành công vào sổ quỹ Cash Book!');
                    renderLoyaltyCashBookScreen();
                } else {
                    alert('Vui lòng điền đầy đủ mô tả và số tiền hợp lệ.');
                }
            });
        }
    }

    // 10. Success & Action plan Roadmap
    function renderSuccessRoadmapScreen() {
        phoneScreen.innerHTML = `
            <div class="sim-header">
                <span style="font-weight:700; color:var(--success);">Succès de transaction</span>
            </div>
            <div class="sim-body" style="display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding-top:20px;">
                <div style="width:70px; height:70px; background:rgba(0,230,118,0.1); border-radius:50%; display:flex; align-items:center; justify-content:center; margin-bottom:16px; border:2px solid var(--success); box-shadow:0 0 20px rgba(0,230,118,0.3);">
                    <span style="font-size:32px; color:var(--success);">✓</span>
                </div>
                <h4 style="font-size:14px; font-weight:800; color:var(--success); margin-bottom:8px;">Quick Sale est Prêt!</h4>
                <p style="font-size:10px; color:var(--text-muted); margin-bottom:20px; max-width:200px;">Hệ thống đã kiểm thử tích hợp hoàn chỉnh cho ví điện tử Natcash.</p>
                
                <div class="sim-card" style="width:100%; text-align:left; padding:10px;">
                    <div style="font-weight:700; font-size:10px; margin-bottom:8px; color:var(--secondary);">LỘ TRÌNH THỬ NGHIỆM PILOT (HAITI)</div>
                    <div style="display:flex; justify-content:space-between; font-size:9px; margin-bottom:4px;">
                        <span>100 điểm bán Port-au-Prince</span>
                        <span style="color:var(--success); font-weight:700;">Đã lên KH</span>
                    </div>
                    <div style="width:100%; height:6px; background:rgba(255,255,255,0.1); border-radius:3px; overflow:hidden;">
                        <div style="width:60%; height:100%; background:linear-gradient(to right, var(--secondary), var(--success));"></div>
                    </div>
                    <div style="font-size:8px; color:var(--text-muted); margin-top:4px; text-align:right;">Giai đoạn 1: 60% hoàn thành chuẩn bị</div>
                </div>
            </div>
        `;
    }
});
