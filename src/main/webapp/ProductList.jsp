
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<div class="row pt-4 align-items-center">
    <c:forEach items="${products}" var="p" varStatus="vs">
        <div class="col-2 my-1 mx-3">
            <div class="img-fluid img-thumbnail" title="${p.productDescription}">
                <img src="model-images/${p.productLine.id}/${p.id}.jpg" height="120" width="180"/>
            </div>
            <div>${p.productName} <span class="text-right">${p.msrp}</span></div>
        </div>
    </c:forEach>
</div>
<hr>
<div class="d-flex flex-row">
    <div class="px-1">page:</div>
    <div class="px-1 mx-1 div-link"
         onclick="loadProduct(page=${page<=1?totalPage:page-1}, ${pageSize})"> &lt;
    </div>
    <c:forEach begin="1" end="${totalPage}" varStatus="vs">
        <c:choose>
            <c:when test="${vs.count==page}">
                <div class="px-1 mx-1 div-link text-light bg-dark"> ${vs.count} </div>
            </c:when>
            <c:otherwise>
                <div class="px-1 mx-1 div-link" onclick="loadProduct(page=${vs.count}, ${pageSize})">
                        ${vs.count}
                </div>
            </c:otherwise>
        </c:choose>
    </c:forEach>
    <div class="px-1 mx-2 div-link"
         onclick="loadProduct(page=${page>=totalPage?1:page+1}, ${pageSize})"> &gt;
    </div>
    <div class="px-4 mx-1">
        items per page:
        <select id="itemsPage" onchange="loadProduct(1)">
            <option value="5" ${pageSize==5?'selected':''}>5</option>
            <option value="10" ${pageSize==10?'selected':''}>10</option>
            <option value="15" ${pageSize==15?'selected':''}>15</option>
            <option value="20" ${pageSize==20?'selected':''}>20</option>
            <option value="50" ${pageSize==50?'selected':''}>50</option>
        </select>
    </div>
</div>
<br>



<%--จนถึงก่อนใส่รูปภาพ--%>
<%--<html>--%>
<%--<head>--%>
<%--    <title>Title</title>--%>
<%--    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"--%>
<%--          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">--%>
<%--</head>--%>
<%--<body>--%>
<%--<div class="container ml-2 p-2">--%>
<%--    <div class="d-flex flex-row">Product List ::</div>--%>
<%--    <hr>--%>
<%--    <c:forEach items="${products}" var="p" varStatus="vs">--%>
<%--        <div class="row">--%>
<%--            <div class="col-1">${vs.count + (page-1)*pageSize})</div>--%>
<%--            <div class="col-1">${p.id}</div>--%>
<%--            <div class="col-4">${p.productName}</div>--%>
<%--            <div class="col-1">${p.productScale}</div>--%>
<%--            <div class="col-1" style="text-align: right">${p.msrp}</div>--%>
<%--        </div>--%>
<%--    </c:forEach>--%>
<%--    <hr>--%>
<%--    <div class="d-flex flex-row">--%>
<%--        <div>page:</div>--%>
<%--        <c:forEach begin="1" end="${itemCount/pageSize + (itemCount%pageSize>0?1 :0)}" varStatus="vs">--%>
<%--            <c:choose>--%>
<%--                <c:when test="${vs.count==page}">--%>
<%--                    <div class="p-1 text-danger">[${vs.count}]</div>--%>
<%--                </c:when>--%>
<%--                <c:otherwise>--%>
<%--                    <div class="p-1"><a href="product-list?pageSize=${pageSize}&page=${vs.count}">[${vs.count}]</a>--%>
<%--                    </div>--%>
<%--                </c:otherwise>--%>
<%--            </c:choose>--%>
<%--        </c:forEach>--%>
<%--    </div>--%>
<%--</div>--%>
<%--</body>--%>
<%--</html>--%>


