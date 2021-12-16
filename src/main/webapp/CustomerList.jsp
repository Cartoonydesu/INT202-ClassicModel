<%--
  Created by IntelliJ IDEA.
  User: User
  Date: 12/2/2021
  Time: 4:46 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
<h1>Customer List by 63130500087 - Piraya Sutthiparinyanon</h1>
<div class="container">
    <c:forEach begin="1" items="${customerList}" var="c" varStatus="vs">
        <div class="row">
            <div class="col">0087-${vs.count}</div>
            <div class="col">${c.id}</div>
            <div class="col">${c.customerName}</div>
            <div class="col">${c.city}</div>
            <div class="col">${c.country}</div>
            <div class="col">${c.phone}</div>
            <div class="col">${c.role}</div>
        </div>
    </c:forEach>
</div>
</body>
</html>
