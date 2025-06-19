export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
}) {
  const isLoggedIn = true;
  return isLoggedIn ? (
    <div>
      <div>{children}</div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            display: "flex",
            gap: "2rem",
            flexDirection: "column",
            background: "black",
            color: "white",
          }}
        >
          <div>{users}</div>
          <div>{revenue}</div>
        </div>

        <div>{notifications}</div>
      </div>
    </div>
  ) : (
    <>login</>
  );
}
