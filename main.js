document.addEventListener("DOMContentLoaded", function () {


    function escapeHtml(value) {
        return String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
    }
    function safeImage(value) {
        return /^assets\/[a-zA-Z0-9_-]+\.(?:jpe?g|png|webp|gif)$/i.test(String(value || "")) ? value : "assets/hero.jpg";
    }

    /* =========================================
       HELPERS
    ========================================= */

    function getUser() {

        const data =
            localStorage.getItem("htUser");

        if (!data) {
            return null;
        }

        try {
            return JSON.parse(data);
        } catch {
            return null;
        }

    }


    function getOrders() {

        try {

            return JSON.parse(
                localStorage.getItem("htOrders") ||
                "[]"
            );

        } catch {

            return [];

        }

    }


    function saveOrders(orders) {

        localStorage.setItem(
            "htOrders",
            JSON.stringify(orders)
        );

    }


    function formatMoney(value) {

        return Number(
            value || 0
        ).toLocaleString(
            "vi-VN"
        ) + "đ";

    }


    function getStatusText(status) {

        if (status === "shipping") {
            return "Đang giao";
        }

        if (status === "completed") {
            return "Đã hoàn thành";
        }

        return "Đang xử lý";

    }



    /* =========================================
       SEARCH
    ========================================= */

    const searchButton =
        document.getElementById(
            "searchButton"
        );


    if (searchButton) {

        searchButton.addEventListener(
            "click",
            function () {

                const keyword =
                    prompt(
                        "Nhập tên mẫu tem bạn muốn tìm:"
                    );

                if (
                    keyword &&
                    keyword.trim()
                ) {

                    window.location.href =
                        "products.html?q=" + encodeURIComponent(keyword.trim());

                }

            }
        );

    }



    /* =========================================
       PASSWORD TOGGLE
    ========================================= */

    document
        .querySelectorAll(
            ".password-toggle"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const input =
                            document.getElementById(
                                this.dataset.target
                            );


                        if (!input) {
                            return;
                        }


                        if (
                            input.type ===
                            "password"
                        ) {

                            input.type =
                                "text";

                            this.textContent =
                                "🙈";

                        } else {

                            input.type =
                                "password";

                            this.textContent =
                                "👁";

                        }

                    }
                );

            }
        );



    /* =========================================
       REGISTER
    ========================================= */

    const registerForm =
        document.getElementById(
            "registerForm"
        );


    if (registerForm) {

        registerForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const name =
                    document
                        .getElementById(
                            "registerName"
                        )
                        .value
                        .trim();


                const email =
                    document
                        .getElementById(
                            "registerEmail"
                        )
                        .value
                        .trim();


                const phone =
                    document
                        .getElementById(
                            "registerPhone"
                        )
                        .value
                        .trim();


                const password =
                    document
                        .getElementById(
                            "registerPassword"
                        )
                        .value;


                const confirmPassword =
                    document
                        .getElementById(
                            "registerConfirmPassword"
                        )
                        .value;


                const terms =
                    document
                        .getElementById(
                            "registerTerms"
                        )
                        .checked;


                if (
                    !name ||
                    !email ||
                    !phone ||
                    !password ||
                    !confirmPassword
                ) {

                    alert(
                        "Vui lòng nhập đầy đủ thông tin."
                    );

                    return;
                }


                if (
                    password.length < 6
                ) {

                    alert(
                        "Mật khẩu phải có ít nhất 6 ký tự."
                    );

                    return;
                }


                if (
                    password !==
                    confirmPassword
                ) {

                    alert(
                        "Mật khẩu xác nhận không khớp."
                    );

                    return;
                }


                if (!terms) {

                    alert(
                        "Bạn cần đồng ý với điều khoản."
                    );

                    return;
                }


                const user = {

                    name,
                    email,
                    phone,
                    password

                };


                localStorage.setItem(
                    "htUser",
                    JSON.stringify(user)
                );


                localStorage.removeItem(
                    "htLoggedIn"
                );


                alert(
                    "Đăng ký tài khoản thành công!"
                );


                window.location.href =
                    "login.html";

            }
        );

    }



    /* =========================================
       LOGIN
    ========================================= */

    const loginForm =
        document.getElementById(
            "loginForm"
        );


    if (loginForm) {

        loginForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const account =
                    document
                        .getElementById(
                            "loginEmail"
                        )
                        .value
                        .trim();


                const password =
                    document
                        .getElementById(
                            "loginPassword"
                        )
                        .value;


                const user =
                    getUser();


                if (!user) {

                    alert(
                        "Chưa có tài khoản. Vui lòng đăng ký trước."
                    );

                    return;
                }


                const correctAccount =
                    account === user.email ||
                    account === user.phone;


                if (
                    correctAccount &&
                    password === user.password
                ) {

                    localStorage.setItem(
                        "htLoggedIn",
                        "true"
                    );


                    alert(
                        "Đăng nhập thành công!"
                    );


                    window.location.href =
                        "index.html";

                } else {

                    alert(
                        "Email, số điện thoại hoặc mật khẩu không đúng."
                    );

                }

            }
        );

    }



    /* =========================================
       USER HEADER
    ========================================= */

    const userArea =
        document.getElementById(
            "userArea"
        );


    if (userArea) {

        const user =
            getUser();


        const loggedIn =
            localStorage.getItem(
                "htLoggedIn"
            );


        if (
            user &&
            loggedIn === "true"
        ) {

            userArea.innerHTML = `
                <div class="logged-user">

                    <a
                        href="profile.html"
                        class="ht-user-link"
                    >
                        <span class="user-icon">
                            👤
                        </span>

                        <span>
                            ${escapeHtml(user.name)}
                        </span>
                    </a>

                    <button
                        type="button"
                        id="logoutButton"
                    >
                        Đăng xuất
                    </button>

                </div>
            `;


            document
                .getElementById(
                    "logoutButton"
                )
                .addEventListener(
                    "click",
                    function () {

                        localStorage.removeItem(
                            "htLoggedIn"
                        );


                        localStorage.removeItem(
                            "htCheckoutProduct"
                        );


                        window.location.href =
                            "index.html";

                    }
                );

        }

    }



    /* =========================================
       ACCOUNT NAME
    ========================================= */

    const accountName =
        document.getElementById(
            "accountName"
        );


    if (accountName) {

        const user =
            getUser();


        if (user) {

            accountName.textContent =
                user.name;

        }

    }



    /* =========================================
       PROFILE
    ========================================= */

    const profileForm =
        document.getElementById(
            "profileForm"
        );


    if (profileForm) {

        const user =
            getUser();


        if (
            !user ||
            localStorage.getItem(
                "htLoggedIn"
            ) !== "true"
        ) {

            window.location.href =
                "login.html";

            return;

        }


        const profileName =
            document.getElementById(
                "profileName"
            );


        const profileEmail =
            document.getElementById(
                "profileEmail"
            );


        const profilePhone =
            document.getElementById(
                "profilePhone"
            );


        profileName.value =
            user.name || "";


        profileEmail.value =
            user.email || "";


        profilePhone.value =
            user.phone || "";


        profileForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const oldEmail =
                    user.email;


                const newUser = {

                    ...user,

                    name:
                        profileName
                            .value
                            .trim(),

                    email:
                        profileEmail
                            .value
                            .trim(),

                    phone:
                        profilePhone
                            .value
                            .trim()

                };


                if (
                    !newUser.name ||
                    !newUser.email ||
                    !newUser.phone
                ) {

                    alert(
                        "Vui lòng nhập đầy đủ thông tin."
                    );

                    return;
                }


                localStorage.setItem(
                    "htUser",
                    JSON.stringify(
                        newUser
                    )
                );


                const orders =
                    getOrders();


                orders.forEach(
                    function (order) {

                        if (
                            order.ownerEmail ===
                            oldEmail
                        ) {

                            order.ownerEmail =
                                newUser.email;

                        }

                    }
                );


                saveOrders(
                    orders
                );


                alert(
                    "Cập nhật hồ sơ thành công!"
                );


                window.location.reload();

            }
        );

    }



    /* =========================================
       PRODUCT -> CHECKOUT
    ========================================= */

    document
        .querySelectorAll(
            ".cart-button"
        )
        .forEach(
            function (button) {

                button.addEventListener(
                    "click",
                    function () {

                        const user =
                            getUser();


                        const loggedIn =
                            localStorage.getItem(
                                "htLoggedIn"
                            );


                        if (
                            !user ||
                            loggedIn !== "true"
                        ) {

                            alert(
                                "Bạn cần đăng nhập trước khi đặt hàng."
                            );


                            window.location.href =
                                "login.html";

                            return;

                        }


                        const name =
                            this.dataset.product;


                        const price =
                            Number(
                                this.dataset.price
                            );


                        const image =
                            this.dataset.image || "";


                        if (
                            !name ||
                            price <= 0
                        ) {

                            alert(
                                "Sản phẩm chưa có đầy đủ thông tin."
                            );

                            return;

                        }


                        localStorage.setItem(
                            "htCheckoutProduct",
                            JSON.stringify(
                                {
                                    name,
                                    price,
                                    image
                                }
                            )
                        );


                        window.location.href =
                            "checkout.html";

                    }
                );

            }
        );



    /* =========================================
       CHECKOUT
    ========================================= */

    const checkoutForm =
        document.getElementById(
            "checkoutForm"
        );


    if (checkoutForm) {

        const user =
            getUser();


        const loggedIn =
            localStorage.getItem(
                "htLoggedIn"
            );


        if (
            !user ||
            loggedIn !== "true"
        ) {

            window.location.href =
                "login.html";

            return;

        }


        const productData =
            localStorage.getItem(
                "htCheckoutProduct"
            );


        if (!productData) {

            alert(
                "Bạn chưa chọn sản phẩm."
            );


            window.location.href =
                "products.html";

            return;

        }


        const product =
            JSON.parse(
                productData
            );


        const formattedPrice =
            formatMoney(
                product.price
            );


        document.getElementById(
            "checkoutProduct"
        ).innerHTML = `
            <div class="ht-checkout-product">

                <img
                    src="${safeImage(product.image)}"
                    alt="${escapeHtml(product.name)}"
                >

                <div>

                    <strong>
                        ${escapeHtml(product.name)}
                    </strong>

                    <small>
                        Sản phẩm HT Auto Decal
                    </small>

                </div>

            </div>
        `;


        document.getElementById(
            "checkoutUnitPrice"
        ).textContent =
            formattedPrice;


        document.getElementById(
            "checkoutLineTotal"
        ).textContent =
            formattedPrice;


        document.getElementById(
            "checkoutSubtotal"
        ).textContent =
            formattedPrice;


        document.getElementById(
            "checkoutTotal"
        ).textContent =
            formattedPrice;


        document.getElementById(
            "checkoutName"
        ).value =
            user.name || "";


        document.getElementById(
            "checkoutPhone"
        ).value =
            user.phone || "";


        document.getElementById(
            "checkoutEmail"
        ).value =
            user.email || "";



        const paymentSelect =
            document.getElementById(
                "checkoutPayment"
            );


        document
            .querySelectorAll(
                'input[name="paymentMethod"]'
            )
            .forEach(
                function (radio) {

                    radio.addEventListener(
                        "change",
                        function () {

                            paymentSelect.value =
                                this.value;

                        }
                    );

                }
            );



        checkoutForm.addEventListener(
            "submit",
            function (event) {

                event.preventDefault();


                const customerName =
                    document
                        .getElementById(
                            "checkoutName"
                        )
                        .value
                        .trim();


                const phone =
                    document
                        .getElementById(
                            "checkoutPhone"
                        )
                        .value
                        .trim();


                const email =
                    document
                        .getElementById(
                            "checkoutEmail"
                        )
                        .value
                        .trim();


                const address =
                    document
                        .getElementById(
                            "checkoutAddress"
                        )
                        .value
                        .trim();


                const note =
                    document
                        .getElementById(
                            "checkoutNote"
                        )
                        .value
                        .trim();


                if (
                    !customerName ||
                    !phone ||
                    !email ||
                    !address
                ) {

                    alert(
                        "Vui lòng nhập đầy đủ thông tin nhận hàng."
                    );

                    return;

                }


                if (
                    !/^[0-9]{9,11}$/.test(
                        phone
                    )
                ) {

                    alert(
                        "Số điện thoại không hợp lệ."
                    );

                    return;

                }


                const now =
                    new Date();


                const order = {

                    id:
                        "HD" +
                        Date.now()
                            .toString()
                            .slice(-8),

                    ownerEmail:
                        user.email,

                    product:
                        product.name,

                    image:
                        product.image,

                    price:
                        product.price,

                    quantity:
                        1,

                    customerName,

                    phone,

                    email,

                    address,

                    note,

                    payment:
                        paymentSelect.value,

                    shippingFee:
                        0,

                    discount:
                        0,

                    total:
                        product.price,

                    date:
                        now.toLocaleDateString(
                            "vi-VN"
                        ),

                    time:
                        now.toLocaleTimeString(
                            "vi-VN",
                            {
                                hour: "2-digit",
                                minute: "2-digit"
                            }
                        ),

                    status:
                        "processing"

                };


                const orders =
                    getOrders();


                orders.push(
                    order
                );


                saveOrders(
                    orders
                );


                localStorage.removeItem(
                    "htCheckoutProduct"
                );


                alert(
                    "Đặt hàng thành công!"
                );


                window.location.href =
                    "orders.html";

            }
        );

    }



    /* =========================================
       RENDER ORDERS
    ========================================= */

    const ordersContainer =
        document.getElementById(
            "ordersTableBody"
        );


    let currentOrders =
        [];


    function renderOrders(
        keyword = "",
        status = "all"
    ) {

        if (!ordersContainer) {
            return;
        }


        const user =
            getUser();


        if (!user) {
            return;
        }


        currentOrders =
            getOrders()
                .filter(
                    function (order) {

                        return (
                            order.ownerEmail ===
                            user.email
                        );

                    }
                )
                .reverse();


        const filtered =
            currentOrders.filter(
                function (order) {

                    const text = `
                        ${escapeHtml(order.id)}
                        ${escapeHtml(order.product)}
                        ${escapeHtml(order.customerName)}
                        ${escapeHtml(order.phone)}
                    `.toLowerCase();


                    const keywordMatch =
                        !keyword ||
                        text.includes(
                            keyword.toLowerCase()
                        );


                    const statusMatch =
                        status === "all" ||
                        order.status === status;


                    return (
                        keywordMatch &&
                        statusMatch
                    );

                }
            );


        if (
            filtered.length === 0
        ) {

            ordersContainer.innerHTML = `
                <div class="ht-empty-order">

                    <div>
                        🛍️
                    </div>

                    <h3>
                        Bạn chưa có đơn hàng nào
                    </h3>

                    <p>
                        Hãy chọn một sản phẩm để tạo đơn hàng đầu tiên.
                    </p>

                    <a href="products.html">
                        Xem sản phẩm
                    </a>

                </div>
            `;

            return;

        }


        ordersContainer.innerHTML =
            filtered.map(
                function (order) {

                    return `
                        <article
                            class="ht-order-card"
                            data-status="${order.status}"
                        >

                            <div class="ht-order-card-top">

                                <div>

                                    <strong>
                                        🏪 HT Auto Decal
                                    </strong>

                                    <small>
                                        Mã đơn:
                                        #${escapeHtml(order.id)}
                                    </small>

                                </div>

                                <span class="ht-order-status">
                                    ${getStatusText(order.status)}
                                </span>

                            </div>


                            <div class="ht-order-card-body">

                                <img
                                    src="${safeImage(order.image)}"
                                    alt="${escapeHtml(order.product)}"
                                >


                                <div class="ht-order-card-product">

                                    <strong>
                                        ${escapeHtml(order.product)}
                                    </strong>

                                    <span>
                                        Số lượng:
                                        ${order.quantity}
                                    </span>

                                    <small>
                                        ${escapeHtml(order.date)}
                                        ${escapeHtml(order.time)}
                                    </small>

                                </div>


                                <strong class="ht-order-price">
                                    ${formatMoney(order.total)}
                                </strong>

                            </div>


                            <div class="ht-order-card-bottom">

                                <div>

                                    <small>
                                        Giao tới:
                                        ${escapeHtml(order.customerName)}
                                        •
                                        ${escapeHtml(order.phone)}
                                    </small>

                                </div>


                                <button
                                    type="button"
                                    class="order-action"
                                    data-order-id="${escapeHtml(order.id)}"
                                >
                                    Xem chi tiết
                                </button>

                            </div>

                        </article>
                    `;

                }
            ).join("");


        attachOrderDetailButtons();

    }



    /* =========================================
       ORDER DETAIL
    ========================================= */

    function attachOrderDetailButtons() {

        document
            .querySelectorAll(
                ".order-action"
            )
            .forEach(
                function (button) {

                    button.addEventListener(
                        "click",
                        function () {

                            const id =
                                this.dataset.orderId;


                            const order =
                                getOrders()
                                    .find(
                                        function (item) {

                                            return (
                                                item.id === id
                                            );

                                        }
                                    );


                            if (!order) {
                                return;
                            }


                            openOrderModal(
                                order
                            );

                        }
                    );

                }
            );

    }



    function openOrderModal(order) {

        const old =
            document.getElementById(
                "orderDetailModal"
            );


        if (old) {
            old.remove();
        }


        const paymentText =
            order.payment === "bank"
                ?
                "Chuyển khoản ngân hàng"
                :
                "Thanh toán khi nhận hàng";


        const modal =
            document.createElement(
                "div"
            );


        modal.id =
            "orderDetailModal";


        modal.className =
            "order-detail-overlay";


        modal.innerHTML = `
            <div class="order-detail-modal">


                <div class="order-detail-header">

                    <div>

                        <span class="order-detail-label">
                            HT AUTO DECAL
                        </span>

                        <h2>
                            Chi tiết đơn hàng
                        </h2>

                        <p>
                            #${escapeHtml(order.id)}
                        </p>

                    </div>


                    <button
                        id="closeOrderModal"
                        class="order-modal-close"
                        type="button"
                    >
                        ✕
                    </button>

                </div>


                <div class="order-detail-status">

                    <div>

                        <span>
                            Trạng thái
                        </span>

                        <strong>
                            ${getStatusText(order.status)}
                        </strong>

                    </div>


                    <div>

                        <span>
                            Ngày đặt
                        </span>

                        <strong>
                            ${escapeHtml(order.date)}
                            ${escapeHtml(order.time)}
                        </strong>

                    </div>

                </div>


                <div class="order-detail-section">

                    <h3>
                        📍 Địa chỉ nhận hàng
                    </h3>

                    <strong>
                        ${escapeHtml(order.customerName)}
                    </strong>

                    <p>
                        ${escapeHtml(order.phone)}
                    </p>

                    <p>
                        ${escapeHtml(order.email)}
                    </p>

                    <p>
                        ${escapeHtml(order.address)}
                    </p>

                </div>


                <div class="order-detail-section">

                    <h3>
                        🏪 HT Auto Decal
                    </h3>


                    <div class="order-detail-product">

                        <img
                            src="${safeImage(order.image)}"
                            alt="${escapeHtml(order.product)}"
                        >


                        <div class="order-detail-product-info">

                            <strong>
                                ${escapeHtml(order.product)}
                            </strong>

                            <span>
                                Số lượng:
                                ${order.quantity}
                            </span>

                        </div>


                        <strong class="order-detail-price">
                            ${formatMoney(order.price)}
                        </strong>

                    </div>

                </div>


                <div class="order-detail-section">

                    <h3>
                        Phương thức thanh toán
                    </h3>

                    <p>
                        ${paymentText}
                    </p>

                </div>


                ${
                    order.note
                        ?
                        `
                            <div class="order-detail-section">

                                <h3>
                                    Lời nhắn
                                </h3>

                                <p>
                                    ${escapeHtml(order.note)}
                                </p>

                            </div>
                        `
                        :
                        ""
                }


                <div class="order-detail-summary">

                    <div>

                        <span>
                            Tổng tiền hàng
                        </span>

                        <span>
                            ${formatMoney(order.price)}
                        </span>

                    </div>


                    <div>

                        <span>
                            Phí vận chuyển
                        </span>

                        <span>
                            ${formatMoney(order.shippingFee)}
                        </span>

                    </div>


                    <div>

                        <span>
                            Giảm giá
                        </span>

                        <span>
                            -${formatMoney(order.discount)}
                        </span>

                    </div>


                    <div class="order-detail-total">

                        <span>
                            Thành tiền
                        </span>

                        <strong>
                            ${formatMoney(order.total)}
                        </strong>

                    </div>

                </div>


                <div class="order-detail-footer">

                    <button
                        type="button"
                        id="closeOrderModalBottom"
                        class="order-detail-close-button"
                    >
                        Đóng
                    </button>

                </div>

            </div>
        `;


        document.body.appendChild(
            modal
        );


        document.body.style.overflow =
            "hidden";


        function closeModal() {

            modal.remove();

            document.body.style.overflow =
                "";

        }


        document
            .getElementById(
                "closeOrderModal"
            )
            .addEventListener(
                "click",
                closeModal
            );


        document
            .getElementById(
                "closeOrderModalBottom"
            )
            .addEventListener(
                "click",
                closeModal
            );


        modal.addEventListener(
            "click",
            function (event) {

                if (
                    event.target === modal
                ) {

                    closeModal();

                }

            }
        );

    }



    /* =========================================
       ORDER SEARCH
    ========================================= */

    const orderSearch =
        document.getElementById(
            "orderSearch"
        );


    const orderStatusFilter =
        document.getElementById(
            "orderStatusFilter"
        );


    function updateOrderFilter() {

        renderOrders(

            orderSearch
                ?
                orderSearch.value.trim()
                :
                "",

            orderStatusFilter
                ?
                orderStatusFilter.value
                :
                "all"

        );

    }


    if (orderSearch) {

        orderSearch.addEventListener(
            "input",
            updateOrderFilter
        );

    }


    if (orderStatusFilter) {

        orderStatusFilter.addEventListener(
            "change",
            updateOrderFilter
        );

    }


    if (ordersContainer && localStorage.getItem("htLoggedIn") !== "true") {
        window.location.href = "login.html";
    } else {
        renderOrders();
    }



    /* =========================================
       PRODUCT SORT
    ========================================= */

    const sortProducts =
        document.getElementById(
            "sortProducts"
        );


    const productGrid =
        document.getElementById(
            "productGrid"
        );


    if (
        sortProducts &&
        productGrid
    ) {

        sortProducts.addEventListener(
            "change",
            function () {

                const cards =
                    Array.from(
                        productGrid
                            .querySelectorAll(
                                ".shop-product-card"
                            )
                    );


                if (
                    this.value ===
                    "low-high"
                ) {

                    cards.sort(
                        function (a, b) {

                            return (
                                Number(a.dataset.price) -
                                Number(b.dataset.price)
                            );

                        }
                    );

                }


                if (
                    this.value ===
                    "high-low"
                ) {

                    cards.sort(
                        function (a, b) {

                            return (
                                Number(b.dataset.price) -
                                Number(a.dataset.price)
                            );

                        }
                    );

                }


                cards.forEach(
                    function (card) {

                        productGrid.appendChild(
                            card
                        );

                    }
                );

            }
        );

    }


    /* GIAI DOAN 2: PRODUCT QUERY & SORT RESTORE */
    if (productGrid) {
        const cards = Array.from(productGrid.querySelectorAll('.shop-product-card'));
        const originalOrder = new Map(cards.map((card,i)=>[card,i]));
        const keyword = (new URLSearchParams(window.location.search).get('q') || '').trim();
        const productHeading = productGrid.parentElement.querySelector('.ht-shop-heading');
        const resultNote = document.createElement('p');
        resultNote.className = 'ht-results-message';
        resultNote.setAttribute('role','status');
        resultNote.setAttribute('aria-live','polite');
        productGrid.parentElement.insertBefore(resultNote, productGrid);
        const empty = document.createElement('div');
        empty.className = 'ht-search-empty';
        empty.innerHTML = '<p>Không tìm thấy sản phẩm phù hợp.</p><a href="products.html">Xem tất cả sản phẩm →</a>';
        const normalize = s=> String(s).normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').toLowerCase();
        function filterProducts() {
            const found = cards.filter(c => normalize(c.innerText).includes(normalize(keyword)));
            cards.forEach(c=>{c.hidden = keyword ? !found.includes(c) : false; if(c.hidden)c.style.display='none'; else c.style.removeProperty('display');});
            resultNote.textContent = keyword ? 'Tìm thấy ' + found.length + ' sản phẩm cho: “' + keyword + '”' : 'Đang hiển thị ' + cards.length + ' sản phẩm';
            if(found.length===0) productGrid.appendChild(empty); else empty.remove();
        }
        filterProducts();
        if (sortProducts) sortProducts.addEventListener('change', function(){
            if(this.value==='default') {
                cards.slice().sort((a,b)=>originalOrder.get(a)-originalOrder.get(b)).forEach(c=>productGrid.appendChild(c));
                // Preserve the empty state at the bottom.
                if(empty.isConnected)productGrid.appendChild(empty);
            }
        });
    }

    /* PROMOTION CARDS: GO TO RELEVANT PRODUCTS */
    document.querySelectorAll('[data-search-promotion]').forEach(btn=>{
        btn.addEventListener('click',()=>{
            const card=btn.closest('.promotion-card');
            const title=card?.querySelector('h3')?.textContent.toLowerCase()||'';
            let q='';
            if(title.includes('vision'))q='Vision';
            else if(title.includes('ô tô'))q='Ô Tô';
            else if(title.includes('xe điện'))q='Xe Điện';
            else if(title.includes('sh'))q='SH';
            window.location.href='products.html'+(q?'?q='+encodeURIComponent(q):'');
        });
    });

    /* FEEDBACK: DEMO ONLY, LOCAL TO BROWSER */
    const feedbackForm=document.getElementById('feedbackForm');
    if(feedbackForm){
        feedbackForm.addEventListener('submit',event=>{
            event.preventDefault();
            if(!feedbackForm.reportValidity())return;
            const data={name:document.getElementById('feedbackName').value.trim(), type:document.getElementById('feedbackType').value, message:document.getElementById('feedbackMessage').value.trim(), date:new Date().toISOString()};
            if(data.name.length<2||data.message.length<10)return;
            let entries=[];
            try { const saved=JSON.parse(localStorage.getItem('htFeedback')||'[]'); if(Array.isArray(saved))entries=saved; }catch{}
            entries.push(data);
            localStorage.setItem('htFeedback',JSON.stringify(entries));
            feedbackForm.reset();
            document.getElementById('feedbackStatus').textContent='Đã lưu góp ý trên trình duyệt này (không gửi đến cửa hàng).';
        });
    }

    /* FORGOT PASSWORD: LOCAL DEMO ONLY */
    const forgotForm=document.getElementById('forgotForm');
    if(forgotForm){
        forgotForm.addEventListener('submit',event=>{
            event.preventDefault();
            if(!forgotForm.reportValidity())return;
            const user=getUser();
            const status=document.getElementById('forgotStatus');
            const email=document.getElementById('forgotEmail').value.trim();
            const phone=document.getElementById('forgotPhone').value.trim();
            const password=document.getElementById('forgotPassword').value;
            if(!user||user.email!==email||user.phone!==phone){
                status.textContent='Không khớp thông tin tài khoản demo trên thiết bị này.';
                return;
            }
            user.password=password;
            localStorage.setItem('htUser',JSON.stringify(user));
            localStorage.removeItem('htLoggedIn');
            status.innerHTML='Đã đổi mật khẩu tài khoản demo. <a href="login.html">Đăng nhập lại →</a>';
        });
    }

});
