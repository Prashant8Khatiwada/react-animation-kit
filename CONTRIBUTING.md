# Contributing to react-animation-kit

First off, thank you for considering contributing to react-animation-kit! 🎉

It's people like you that make react-animation-kit such a great tool for the React community.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Project Structure](#project-structure)
- [Coding Guidelines](#coding-guidelines)
- [Commit Guidelines](#commit-guidelines)
- [Pull Request Process](#pull-request-process)

## 📜 Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to prashantkhatiwada554@gmail.com.

### Our Standards

- **Be respectful** and inclusive
- **Be collaborative** and constructive
- **Focus on what is best** for the community
- **Show empathy** towards other community members

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates. When you create a bug report, include as many details as possible:

- **Use a clear and descriptive title**
- **Describe the exact steps to reproduce the problem**
- **Provide specific examples** (code snippets, screenshots)
- **Describe the behavior you observed** and what you expected
- **Include your environment details** (OS, Node version, React version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion:

- **Use a clear and descriptive title**
- **Provide a detailed description** of the suggested enhancement
- **Explain why this enhancement would be useful**
- **List any similar features** in other libraries

### Adding New Animations

We're always looking for new animation components! To add a new animation:

1. Create the animation variant in the appropriate category folder
2. Use the `createAnimation` factory to generate the component
3. Add comprehensive JSDoc comments
4. Update the category's index file to export it
5. Add usage examples in the README
6. Test thoroughly with different props

### Improving Documentation

Documentation improvements are always welcome:

- Fix typos or clarify existing docs
- Add more examples
- Improve API documentation
- Create tutorials or guides

## 🛠️ Development Setup

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Git

### Getting Started

1. **Fork the repository**
   ```bash
   # Click the "Fork" button on GitHub
   ```

2. **Clone your fork**
   ```bash
   git clone https://github.com/YOUR_USERNAME/animation-library.git
   cd animation-library
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

5. **Start development**
   ```bash
   npm run dev
   ```

6. **Test your changes**
   ```bash
   # Build the package
   npm run build
   
   # Run type checking
   npm run typecheck
   
   # Run linting
   npm run lint
   ```

7. **Test locally**
   ```bash
   # Open the playground
   python3 -m http.server 3000
   # Visit http://localhost:3000/playground.html
   ```

## 📁 Project Structure

```
react-animation-kit/
├── src/
│   ├── components/
│   │   ├── animations/      # Animation components
│   │   │   ├── entrance/    # Entrance animations
│   │   │   ├── exit/        # Exit animations
│   │   │   ├── hover/       # Hover & tap interactions
│   │   │   ├── loop/        # Looping animations
│   │   │   └── ...          # Other categories
│   │   └── interactive/     # Physics-based components
│   ├── hooks/               # Custom React hooks
│   ├── presets/             # Easing curves & springs
│   └── utils/               # Utility functions
├── examples/                # Usage examples
├── dist/                    # Build output (generated)
└── playground.html          # Local testing playground
```

## 🎨 Coding Guidelines

### TypeScript

- Use TypeScript for all new code
- Provide proper type definitions
- Avoid using `any` unless absolutely necessary
- Export types that users might need

### Component Structure

All animation components should follow this pattern:

```typescript
import { createAnimation } from '../../utils/create-animation'
import { easings } from '../../presets/easings'

/**
 * Animation description
 * 
 * @example
 * ```tsx
 * <AnimationName>
 *   <div>Content</div>
 * </AnimationName>
 * ```
 */
export const AnimationName = createAnimation(
  'AnimationName',
  {
    hidden: { /* initial state */ },
    visible: { /* animated state */ }
  },
  { 
    duration: 0.5,
    ease: easings.smooth 
  }
)
```

### Naming Conventions

- **Components**: PascalCase (e.g., `FadeIn`, `SlideUp`)
- **Files**: kebab-case (e.g., `fade-in.tsx`, `slide-up.tsx`)
- **Variables**: camelCase (e.g., `animationDuration`, `easingCurve`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `DEFAULT_DURATION`)

### Code Style

- Use 2 spaces for indentation
- Use single quotes for strings
- Add semicolons
- Use trailing commas in multi-line objects/arrays
- Keep lines under 100 characters when possible

### Comments

- Add JSDoc comments for all exported functions/components
- Include `@example` tags showing usage
- Explain complex logic with inline comments
- Keep comments up-to-date with code changes

## 📝 Commit Guidelines

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

### Examples

```bash
feat(animations): add bounce entrance animation
fix(hover): correct scale animation timing
docs(readme): update installation instructions
refactor(utils): simplify createAnimation factory
```

## 🔄 Pull Request Process

1. **Update documentation** if you've changed APIs
2. **Add tests** if applicable
3. **Update the README** if you've added features
4. **Ensure all checks pass** (build, lint, typecheck)
5. **Write a clear PR description**:
   - What changes you made
   - Why you made them
   - How to test them
   - Screenshots/GIFs if relevant

### PR Checklist

- [ ] Code follows the style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Build passes (`npm run build`)
- [ ] Types are correct (`npm run typecheck`)
- [ ] Linting passes (`npm run lint`)

## 🧪 Testing

### Manual Testing

1. Build the package: `npm run build`
2. Test in playground: Open `playground.html` in browser
3. Test interactive components: Open `interactive-playground.html`
4. Test in a real project using `npm link`

### Testing Your Changes

```bash
# In this project
npm link

# In a test project
npm link @khatiwadaprashant/react-animation-kit

# Test your changes
import { YourNewComponent } from '@khatiwadaprashant/react-animation-kit/animations'
```

## 🎯 What We're Looking For

### High Priority

- New animation components
- Performance improvements
- Bug fixes
- Documentation improvements
- TypeScript improvements

### Medium Priority

- New interactive components
- Additional hooks
- Better examples
- Accessibility improvements

### Nice to Have

- Storybook integration
- Automated tests
- CI/CD improvements
- Additional presets

## 💡 Tips for Contributors

- **Start small**: Begin with documentation or small bug fixes
- **Ask questions**: Open an issue if you're unsure about something
- **Be patient**: Reviews may take time
- **Stay updated**: Pull latest changes before starting work
- **Have fun**: Enjoy the process of contributing!

## 📞 Getting Help

- **Questions?** Open a [GitHub Discussion](https://github.com/Prashant8Khatiwada/animation-library/discussions)
- **Bug?** Open a [GitHub Issue](https://github.com/Prashant8Khatiwada/animation-library/issues)
- **Email**: prashantkhatiwada554@gmail.com

## 🙏 Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Given credit in the project

Thank you for making react-animation-kit better! 🚀

---

**Happy Contributing!** ✨
