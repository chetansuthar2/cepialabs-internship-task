# React Redux Counter with History

A comprehensive counter application built with React, Redux Toolkit, and Next.js that demonstrates global state management with history tracking and persistence.

## 🚀 Features

### Core Features ✅
- **Increment Counter**: Increase the counter value by 1
- **Decrement Counter**: Decrease the counter value by 1  
- **Reset Counter**: Reset the counter to 0
- **History Tracking**: Store and display all counter value changes
- **Clear History**: Remove all previous counter values
- **Redux Selectors**: Proper state access using Redux selectors

### Bonus Features ✅
- **Custom Step Increment**: Buttons for +1, +5, +10 and custom step input
- **Theme Toggle**: Light/Dark mode managed by Redux state
- **LocalStorage Persistence**: Counter value, history, and theme persist across browser refreshes
- **Statistics Dashboard**: Shows current value, total changes, highest and lowest values
- **Accessibility**: Proper contrast ratios and screen reader support

## 🛠️ Technologies Used

- **React 18** - UI library
- **Redux Toolkit** - State management
- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## 📦 Installation & Setup

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd redux-counter
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

\`\`\`
├── app/
│   ├── layout.tsx          # Root layout with Redux provider
│   ├── page.tsx            # Main page component
│   └── globals.css         # Global styles
├── components/
│   ├── counter.tsx         # Main counter component
│   ├── providers.tsx       # Redux store provider
│   └── ui/                 # shadcn/ui components
├── lib/
│   ├── store.ts            # Redux store configuration
│   ├── hooks.ts            # Typed Redux hooks
│   └── features/
│       ├── counter/
│       │   └── counterSlice.ts  # Counter state slice
│       └── theme/
│           └── themeSlice.ts    # Theme state slice
└── README.md
\`\`\`

## 🔧 Redux State Structure

### Counter Slice
\`\`\`typescript
interface CounterState {
  value: number;           // Current counter value
  history: number[];       // Array of all previous values
}
\`\`\`

### Theme Slice
\`\`\`typescript
interface ThemeState {
  mode: 'light' | 'dark';  // Current theme mode
}
\`\`\`

## 🎯 Assignment Requirements Fulfilled

| Requirement | Status | Implementation |
|-------------|--------|----------------|
| Increase counter | ✅ | `increment` action |
| Decrease counter | ✅ | `decrement` action |
| Reset counter | ✅ | `reset` action |
| Store counter history | ✅ | History array in Redux state |
| Show previous values | ✅ | History list component |
| Clear history button | ✅ | `clearHistory` action |
| Use Redux selectors | ✅ | `useAppSelector` hooks |
| Custom step increment | ✅ | `incrementByAmount` action |
| Theme toggle | ✅ | Theme slice with persistence |
| LocalStorage persistence | ✅ | Middleware for state persistence |

## 🎨 UI Features

- **Responsive Design**: Works on desktop and mobile devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Visual Feedback**: Clear indicators for current value and changes
- **Statistics Cards**: Real-time stats showing usage patterns
- **History Timeline**: Chronological list of all counter changes
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔄 State Management

The application uses Redux Toolkit for predictable state management:

- **Actions**: Pure functions that describe state changes
- **Reducers**: Handle state updates immutably using Immer
- **Selectors**: Efficiently access specific parts of the state
- **Middleware**: Custom middleware for localStorage persistence
- **DevTools**: Redux DevTools integration for debugging

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is created for educational purposes as part of a React Redux assignment.

---

**Assignment completed with all core features and bonus requirements implemented!** 🎉
