import React from 'react';
import { Chart, registerables } from 'chart.js';
import { Bar,  } from 'react-chartjs-2';

Chart.register(...registerables);

const Dashboard = () => {
    const userOverview = {
        totalUsers: 1200,
        activeUsers: 850,
        newUsers: 50
    };

    const productOverview = {
        totalProducts: 300,
        topSellingProducts: ["Product A", "Product B"],
        lowStockProducts: ["Product C", "Product D"]
    };

    const salesData = {
        totalSales: 2000,
        monthlyRevenue: 50000,
        recentTransactions: [
            { id: 1, product: "Product A", amount: 100 },
            { id: 2, product: "Product B", amount: 200 }
        ]
    };

    const salesChartData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May"],
        datasets: [
            {
                label: "Monthly Revenue",
                data: [12000, 15000, 8000, 18000, 20000],
                backgroundColor: "red"
            }
        ]
    };

    const notifications = [
        { id: 1, message: "Low stock on Product C" },
        { id: 2, message: "New order received" },
        { id: 3, message: "User John Doe registered" }
    ];

    return (
        <div className="dashboard-container">
            <h1>Dashboard</h1>
            <div className="user-overview">
                <h2>User Overview</h2>
                <p>Total Users: {userOverview.totalUsers}</p>
                <p>Active Users: {userOverview.activeUsers}</p>
                <p>New Users: {userOverview.newUsers}</p>
            </div>
            <div className="product-overview">
                <h2>Product Overview</h2>
                <p>Total Products: {productOverview.totalProducts}</p>
                <p>Top Selling Products: {productOverview.topSellingProducts.join(", ")}</p>
                <p>Low Stock Products: {productOverview.lowStockProducts.join(", ")}</p>
            </div>
            <div className="sales-overview">
                <h2>Sales Overview</h2>
                <p>Total Sales: {salesData.totalSales}</p>
                <p>Monthly Revenue: {salesData.monthlyRevenue}</p>
                <h3>Recent Transactions</h3>
                <ul>
                    {salesData.recentTransactions.map(transaction => (
                        <li key={transaction.id}>
                            {transaction.product}: ${transaction.amount}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="charts">
                <h2>Sales Trends</h2>
                <Bar data={salesChartData} />
            </div>
            <div className="notifications">
                <h2>Notifications</h2>
                <ul>
                    {notifications.map(notification => (
                        <li key={notification.id}>{notification.message}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;
