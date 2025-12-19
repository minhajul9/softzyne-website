"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AdminUsersPage() {
  const users = [
    {
      id: "1",
      name: "Admin User",
      email: "admin@softzyne.com",
      role: "admin",
      createdAt: "2024-01-15",
    },
  ]

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Users Management</h1>
        <p className="text-muted-foreground">Manage system users and permissions</p>
      </div>

      <div className="space-y-4">
        {users.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl">{user.name}</h3>
                  <p className="text-sm text-muted-foreground font-normal">{user.email}</p>
                </div>
                <Badge>{user.role}</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Created: {new Date(user.createdAt).toLocaleDateString()}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-muted/30">
        <CardContent className="p-6">
          <p className="text-sm text-muted-foreground">
            User management with Auth.js will be available when you upgrade to PostgreSQL. The mock system currently
            supports one admin user for demonstration purposes.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
