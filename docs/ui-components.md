# UI Components Standards

## shadcn/ui Only

All UI elements in this application must use **shadcn/ui components**. Do not create custom components.

### Rules
- **Always import from shadcn/ui** — Use available shadcn components for buttons, forms, dialogs, menus, etc.
- **Do not create custom components** — If a shadcn component doesn't exist for your use case, check the [shadcn/ui docs](https://ui.shadcn.com) or request the component be added to the project.
- **Leverage Tailwind CSS** — Style shadcn components using existing Tailwind utilities rather than custom CSS.
- **Maintain consistency** — Reuse the same components across the app for visual and behavioral consistency.

### Example
```tsx
// ✅ Correct: Use shadcn/ui Button
import { Button } from "@/components/ui/button";

export function MyComponent() {
  return <Button>Click me</Button>;
}

// ❌ Incorrect: Don't create custom button
function CustomButton() {
  return <button className="...">Click me</button>;
}
```

### When to add a new shadcn component
If a component doesn't exist but is needed:
1. Check [shadcn/ui library](https://ui.shadcn.com)
2. Run `npx shadcn-ui@latest add <component-name>`
3. Update this file with usage examples if the component has special integration rules
