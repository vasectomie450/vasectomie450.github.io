# Content Management Guide for Vasectomy 450 Website

## FAQ Content Management System

This website uses a simple markdown-based system for managing FAQ content. This allows the site owner to easily update questions and answers without touching any code.

### How It Works

The FAQ page automatically reads content from markdown files located in the `/public/content/` folder:
- `faq-fr.md` - French FAQ content
- `faq-en.md` - English FAQ content

### File Upload Instructions

1. **Access your website's file manager** (through your hosting provider's control panel)
2. **Navigate to the `/public/content/` folder**
3. **Upload or edit the markdown files** (`faq-fr.md` and `faq-en.md`)

### Editing FAQ Content

#### File Format
Each FAQ file should follow this simple format:

```markdown
# Questions fréquemment posées

## Your first question here?
Your answer here. You can write multiple paragraphs and the system will format them properly.

You can even add multiple paragraphs by leaving blank lines between them.

## Your second question here?
Another answer with as much detail as you need.

## And so on...
Keep adding questions and answers using the same format.
```

#### Important Rules
1. **Questions must start with `## `** (two hashtags and a space)
2. **Answers go on the lines immediately following each question**
3. **Leave blank lines between paragraphs** for better formatting
4. **The main title starts with `# `** (one hashtag and a space)

### Example Content Structure

```markdown
# Frequently Asked Questions

## How long does the procedure take?
The no-scalpel vasectomy typically takes 15 to 20 minutes. It's an outpatient procedure, so you can go home the same day.

## Are there any risks or complications?
Like any medical procedure, vasectomy carries minimal risks. Complications are rare (less than 1%) and include bleeding, infection, or persistent pain.

The procedure is considered very safe when performed by an experienced physician.
```

### Benefits of This System

✅ **No coding required** - Edit content like a simple text document
✅ **Instant updates** - Changes appear immediately on the website
✅ **Bilingual support** - Separate files for French and English
✅ **Backup friendly** - Easy to backup and restore content
✅ **Version control** - Keep track of changes over time

### Troubleshooting

**Q: The FAQ page shows "No Content Found"**
A: Make sure the markdown files are uploaded to `/public/content/` and named exactly `faq-fr.md` and `faq-en.md`

**Q: Questions aren't showing up properly**
A: Check that each question starts with `## ` (two hashtags and a space)

**Q: Formatting looks wrong**
A: Make sure there are blank lines between paragraphs in your answers

### Getting Help

If you need assistance with content management:
1. Check that file names are correct: `faq-fr.md` and `faq-en.md`
2. Verify files are in the `/public/content/` folder
3. Ensure questions start with `## `
4. Contact your web developer if issues persist

### File Locations
- French FAQ: `/public/content/faq-fr.md`
- English FAQ: `/public/content/faq-en.md`
- This guide: `/CONTENT_MANAGEMENT_GUIDE.md`
